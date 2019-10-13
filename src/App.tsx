import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [text, setText] = useState("");

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleTextChange} />
      {text}
    </div>
  );
};

export default App;
