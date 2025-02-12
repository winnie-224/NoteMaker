import React from "react";

const NoteCard = ({ text, onDelete }) => {
  return (
    <div className="note-card">
      <p>{text}</p>
      <button onClick={onDelete}>❌ Delete</button>
    </div>
  );
};

export default NoteCard;
