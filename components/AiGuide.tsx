import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Link2 } from 'lucide-react';
import { generateGuideResponse } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

export const AiGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: ChatRole.MODEL,
      text: "Vanakkam! I'm your expert guide for Oddanchatram. I have access to real-time data. Ask me about current vegetable prices, weather, or history of the Scudder Hospital!",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      role: ChatRole.USER,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const result = await generateGuideResponse(input);

    const aiMsg: ChatMessage = {
      role: ChatRole.MODEL,
      text: result.text || "Sorry, I couldn't process that.",
      sources: result.sources,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-odc-gold text-stone-900 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2 group`}
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">Ask Local Guide</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center pointer-events-none">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setIsOpen(false)}></div>

          {/* Chat Window */}
          <div className="pointer-events-auto w-full sm:w-[450px] h-[80vh] sm:h-[650px] bg-stone-900 sm:rounded-2xl flex flex-col shadow-2xl border border-white/10 sm:mr-6 relative overflow-hidden">
            
            {/* Header */}
            <div className="p-4 bg-stone-800 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-odc-gold to-yellow-200 flex items-center justify-center">
                  <Sparkles size={16} className="text-stone-900" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Oddanchatram Guide</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Live Data Enabled
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.role === ChatRole.USER ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[90%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === ChatRole.USER 
                      ? 'bg-odc-gold text-stone-900 rounded-br-none' 
                      : 'bg-stone-800 text-gray-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {/* Sources display */}
                  {msg.sources && msg.sources.length > 0 && (
                     <div className="mt-2 ml-1 max-w-[90%] flex flex-wrap gap-2">
                       {msg.sources.slice(0, 3).map((source, i) => (
                         <a 
                           key={i} 
                           href={source.uri} 
                           target="_blank" 
                           rel="noreferrer"
                           className="flex items-center gap-1 text-[10px] text-odc-gold/80 hover:text-odc-gold bg-stone-800/50 px-2 py-1 rounded border border-odc-gold/20"
                          >
                           <Link2 size={10} />
                           <span className="truncate max-w-[100px]">{source.title}</span>
                         </a>
                       ))}
                     </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-stone-800 p-3 rounded-2xl rounded-bl-none border border-white/5">
                    <Loader2 size={16} className="animate-spin text-odc-gold" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-stone-800 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about market prices, hospitals..."
                  className="flex-1 bg-stone-900 text-white text-sm rounded-xl px-4 py-3 border border-white/10 focus:outline-none focus:border-odc-gold/50"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading}
                  className="p-3 bg-odc-gold text-stone-900 rounded-xl hover:bg-yellow-400 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 text-center">
                Gemini AI can make mistakes. Check important info.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};