import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <NoteCard key={index} text={note} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default NoteList;
