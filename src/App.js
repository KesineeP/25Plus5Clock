import React from 'react';
import './App.css';
import Clock from './components/Clock.js'
import Setting from './components/Setting.js';

const App = () => {
  return (
    <div className="main">
      <div className="header">
        <h2>Pomodoro Clock</h2>
        <p>Be productive</p>
      </div>
      <Setting />
      <Clock />
    </div>
  );

}

export default App;
