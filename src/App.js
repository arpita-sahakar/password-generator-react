
import './App.css';
import PasswordGenerator from "./PasswordGenerator";
import DisplayPassword from "./DisplayPassword";

function App() {
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <PasswordGenerator/>
      <DisplayPassword/>
    </div>
  );
}

export default App;
