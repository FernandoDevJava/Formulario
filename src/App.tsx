import React from "react";
import "./App.css";
import DarkMode from "./DarkMode";
import Forms from './Forms'


function App() {
  return (
    <div className="App">
      <div>
      <header className="App-header">
        <DarkMode />
        

        <div>
        <Forms />
        </div>
      </header>
      </div>
      
    </div>
    
  );
}

export default App;
