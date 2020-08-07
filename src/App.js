import React from 'react';
import './App.css';
import Home from "./components/home.jsx";
import Week from "./components/weeks/week.jsx";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Week></Week>
    </div>
  );
}

export default App;
