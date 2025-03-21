import { useState } from "react";
import "./App.css";
import { Tiptap } from "./components/TipTap";
import Content from "./components/Content";

function App() {
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <Tiptap setDescription={setDescription} />
      <Content description={description}/>
    </div>
  );
}

export default App;