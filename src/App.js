import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer.js'
import Setting from './components/Setting.js';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);

  const onIncreaseBreakLength = () => {
    setBreakLength(breakLength + 1);
  };
  const onDecreaseBreakLength = () => {
    setBreakLength(breakLength - 1);
  }

  return (
    <div className="main">
      <div className="header">
        <h2>Pomodoro Clock</h2>
        <p>Be productive</p>
      </div>
      <Setting
        breakInterval={breakLength}
        sessionLength={sessionLength}
        onIncreaseBreakLength={onIncreaseBreakLength}
        onDecreaseBreakLength={onDecreaseBreakLength} />
      <Timer
        timerMinute={timerMinute}

      />
    </div>
  );

}

export default App;
