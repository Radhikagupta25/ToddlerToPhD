import { GoogleGenAI } from "@google/genai";
import { levelPrompts } from "../utils/levelPrompts.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const getExplanation = async (topic, level) => {
    const instruction = levelPrompts[level];
    const prompt = `${instruction}\n\nTopic: ${topic}`;

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
    });

    return response.text;
};