import axios from "axios";
const API_KEY = "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";

export const formatNote = async (text) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Format this as a concise study note:" },
          { role: "user", content: text }
        ],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices?.[0]?.message?.content?.trim() || "Error formatting note.";
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.warn("Rate limit hit! Retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds
      return formatNote(text); // Retry request
    }
    
    console.error("API Error:", error.response ? error.response.data : error.message);
    return "Error formatting note.";
  }
};
