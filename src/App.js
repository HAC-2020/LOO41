import React from 'react';
import './App.css';
import Week from "./components/weeks/week.jsx";
import Home from "./components/home-folder/home.jsx";
import Login from "./components/login-page/login.jsx";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Week></Week>
      <Login></Login>
    </div>
  );
}

export default App;
