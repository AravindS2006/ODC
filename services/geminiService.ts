import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from "../types";

// Safety check for process.env in browser environments without polyfills
const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey });

export const generateGuideResponse = async (userMessage: string): Promise<Partial<ChatMessage>> => {
  if (!apiKey) {
    return { text: "I'm sorry, I cannot connect to the local guide service right now (API Key missing)." };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }] // Enable Google Search
      },
    });

    const text = response.text || "I apologize, I didn't catch that. Could you repeat your question about Oddanchatram?";
    
    // Extract grounding metadata (sources)
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