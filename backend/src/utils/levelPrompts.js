export const levelPrompts = {
  toddler:
    "Explain this like I'm 5 years old. Use very simple words, a fun analogy, and keep it short (3-4 sentences).",
  teenager:
    "Explain this to a teenager. Use relatable examples and clear language, moderate detail (4-6 sentences).",
  expert:
    "Explain this at an expert/technical level, using precise terminology and depth (5-8 sentences).",
};

export const isValidLevel = (level) => Object.keys(levelPrompts).includes(level);