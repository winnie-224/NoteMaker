import React, { useState } from "react";
import { formatNote } from "../api"; // Import API function
import { FaSpinner } from "react-icons/fa";
const InputForm = ({ onAddNote }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    const formattedText = await formatNote(text);
    setLoading(false);

    onAddNote(formattedText);
    setText(""); // Clear input after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        rows="4" cols = "50"
      />
      <button type="submit" disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : "Generate Note"}
      </button>
    </form>
  );
};

export default InputForm;
