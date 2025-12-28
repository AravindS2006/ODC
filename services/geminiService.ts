import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGuideResponse = async (userMessage: string): Promise<Partial<ChatMessage>> => {
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