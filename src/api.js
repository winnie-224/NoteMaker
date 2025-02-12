import axios from "axios";

const API_KEY = "AIzaSyANrD-Do0RKKR0V2E3nnqSDVRKvEm9TnKA";

export const formatNote = async (text) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: `Format this as a concise study note:\n\n${text}` }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Error formatting note.";
  } catch (error) {
    console.error("Google Gemini API Error:", error.response ? error.response.data : error.message);
    return "Error formatting note.";
  }
};
