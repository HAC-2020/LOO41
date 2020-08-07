import React from 'react';
import './App.css';
import Week from "./components/weeks/week";
import Home from "./components/home-folder/home.jsx";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Week></Week>
    </div>
  );
}

export default App;
