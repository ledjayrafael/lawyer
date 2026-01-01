
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLegalAssistantResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "Anda adalah AI Legal Concierge untuk Firma Hukum Sterling & Associates. Tujuan Anda adalah membantu pengunjung memahami konsep hukum dasar, mengidentifikasi bidang praktik kami (Korporasi, Keluarga, Kriminal, Litigasi, Perencanaan Warisan, KI) yang mungkin sesuai dengan kebutuhan mereka, dan mendorong mereka untuk memesan konsultasi. JANGAN memberikan nasihat hukum spesifik. SELALU sertakan penafian bahwa Anda adalah AI dan bukan pengacara. Gunakan Bahasa Indonesia yang profesional, berwibawa, namun tetap ramah.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Saya mohon maaf, sepertinya saya sedang mengalami gangguan koneksi. Silakan hubungi kantor kami langsung di (555) 123-4567 untuk bantuan segera.";
  }
};
