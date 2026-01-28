
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getOpticalAdvice(userQuery: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are the 'Kumar Optical Assistant', a professional optometrist's virtual helper. Provide clean, concise, and trustworthy advice about eye health, frame selection based on face shapes, and lens technology. Keep the tone premium, polite, and helpful. Always recommend visiting the store for a professional eye test.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my vision experts. Please visit Kumar Optical for professional advice.";
  }
}
