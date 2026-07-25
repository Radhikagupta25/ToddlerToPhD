import { getExplanation } from "../services/gemini.service.js";
import { isValidLevel } from "../utils/levelPrompts.js";

export const explainTopic = async (req, res) => {
  try {
    const { topic, level } = req.body;

    if (!topic || !topic.trim()) {
      return res.status(400).json({ error: "Topic is required" });
    }

    if (!isValidLevel(level)) {
      return res.status(400).json({ error: "Level must be toddler, teenager, or expert" });
    }

    const explanation = await getExplanation(topic.trim(), level);

    return res.status(200).json({ explanation });
  } catch (error) {
    console.error("Gemini explain error:", error.message);
    return res.status(500).json({ error: "Something went wrong generating the explanation" });
  }
};