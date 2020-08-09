import React from 'react';
import './App.css';
import Week from "./components/weeks/week";
import Home from "./components/home.jsx";
import About1 from "./components/home-folder/about1.jsx";
import About2 from "./components/home-folder/about2.jsx";
import Us from "./components/home-folder/us.jsx";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Week></Week>
    </div>
  );
}

export default App;
