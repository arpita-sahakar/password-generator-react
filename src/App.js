import "./App.css";
import { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
import DisplayPassword from "./DisplayPassword";
import reactDom from "react-dom";
import axios from "axios";

function App() {
  const [criteria, setCriteria] = useState({
    length: "",
    lowerCase: false,
    upperCase: false,
    specialCharacters: false,
    numeric: false,
  });
  const [generatedPassword, setGeneratedPassword] = useState("");

  const getAPIPassword = () => {
    const baseUrl = "https://api.happi.dev/v1/generate-password";
    const APIKey = "628c93DzdnUGO2qzTnNRdQZaBhgpVAW1BiKtufrGhIRUaQfzVKpAPFhE";

    let completeUrl = `${baseUrl}?apikey=${APIKey}&limit=1&length=${
      criteria.length
    }&num=${criteria.numeric ? 1 : 0}&upper=${
      criteria.upperCase ? 1 : 0
    }&symbols=${criteria.specialCharacters ? 1 : 0}`;

    axios.get(completeUrl).then((res) => {
      console.log(res.data.passwords[0]);
      setGeneratedPassword(res.data.passwords[0]);
    });
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <PasswordGenerator criteria={criteria} setCriteria={setCriteria} />
      <DisplayPassword getAPIPassword={getAPIPassword} generatedPassword={generatedPassword}/>
    </div>
  );
}

export default App;
