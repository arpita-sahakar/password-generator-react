import "./App.css";
import { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
import DisplayPassword from "./DisplayPassword";
import reactDom from "react-dom";

function App() {
  const [criteria, setCriteria] = useState({
    length: "",
    lowerCase: false,
    upperCase: false,
    specialCharacters: false,
    numeric: false,
  });
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <PasswordGenerator criteria={criteria} setCriteria={setCriteria}/>
      <DisplayPassword />
    </div>
  );
}

export default App;
