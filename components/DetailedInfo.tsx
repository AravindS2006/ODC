import React, { useState } from 'react';
import { DETAILED_INFO } from '../constants';

export const DetailedInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(DETAILED_INFO[0].id);

  const activeContent = DETAILED_INFO.find(d => d.id === activeTab);

  return (
    <section id="details" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-odc-gold/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">Detailed Insights</h2>
          <p className="text-gray-400">The infrastructure that powers the Vegetable City.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {DETAILED_INFO.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    isActive 
                      ? 'bg-odc-gold text-black border-odc-gold shadow-lg shadow-odc-gold/20' 
                      : 'bg-stone-900 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium tracking-wide">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="bg-stone-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
            <div className="flex-1 space-y-6">
              {activeContent && (
                <>
                  <div className="w-16 h-16 rounded-2xl bg-odc-gold/10 flex items-center justify-center text-odc-gold mb-4">
                    <activeContent.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-serif text-white">{activeContent.title} Overview</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {activeContent.content}
                  </p>
                  
                  <ul className="grid gap-4 mt-6">
                    {activeContent.stats.map((stat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-odc-gold"></div>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            {/* Visual Side */}
            <div className="w-full md:w-1/3">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/${activeTab}/600/800`} 
                  alt={activeContent?.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                   <div className="text-4xl font-bold text-white mb-1">
                     {activeTab === 'economy' ? '₹200Cr+' : activeTab === 'health' ? '50+' : activeTab === 'transport' ? '24/7' : '95%'}
                   </div>
                   <div className="text-xs text-odc-gold uppercase tracking-wider">Key Metric</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};