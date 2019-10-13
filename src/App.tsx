import React, { useState } from "react";
import "./App.scss";
import { useSelect } from "./hooks/selectHooks";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }
  function handleTextareaChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setTextarea(event.target.value);
  }

  const select = useSelect({ options: ["A", "B", "C"] });

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleTextChange} />
      <br />
      {text}
      <br />
      <textarea value={textarea} onChange={handleTextareaChange}></textarea>
      <br />
      {textarea}
      <br />
      {select}
    </div>
  );
};

export default App;
