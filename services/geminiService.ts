
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from "../types";

export const generateGuideResponse = async (userMessage: string): Promise<Partial<ChatMessage>> => {
  // Initialize GoogleGenAI immediately before the call to ensure the latest config is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }] // Enable Google Search grounding for real-time accuracy
      },
    });

    // Directly access the text property as a string (not a method)
    const text = response.text || "I apologize, I didn't catch that. Could you repeat your question about Oddanchatram?";
    
    // Extract grounding metadata (sources) to comply with "ALWAYS extract URLs" rule
    let sources: { title: string; uri: string }[] = [];
    
    if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
      sources = response.candidates[0].groundingMetadata.groundingChunks
        .map((chunk: any) => chunk.web)
        .filter((web: any) => web?.uri && web?.title)
        .map((web: any) => ({ title: web.title, uri: web.uri }));
    }

    return { text, sources };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm having trouble accessing the town archives right now. Please try again later." };
  }
};
