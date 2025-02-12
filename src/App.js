import "./App.css";
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, text]); // Add new note
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index)); // Remove note by index
  };

  return (
    <div className="app-container">
      <h1>LLM Assistant</h1>
      <InputForm onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
