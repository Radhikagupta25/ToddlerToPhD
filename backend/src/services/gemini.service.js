import { GoogleGenerativeAI } from "@google/generative-ai";
import { levelPrompts } from "../utils/levelPrompts.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getExplanation = async (topic, level) => {
  const instruction = levelPrompts[level];
  const prompt = `${instruction}\n\nTopic: ${topic}`;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);

  return result.response.text();
};