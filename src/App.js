import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer.js'
import Setting from './components/Setting.js';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);

  const onIncreaseBreakLength = () => {
    setBreakLength((prev) => prev + 1);

  };
  const onDecreaseBreakLength = () => {
    setBreakLength((prev) => prev - 1);
  }
  const onIncreaseSessionLength = () => {
    setSessionLength((prev) => prev + 1);
    setTimerMinute(sessionLength + 1);
  };
  const onDecreaseSessionLength = () => {
    setSessionLength((prev) => prev - 1);
    setTimerMinute((prev) => prev - 1);
  }


  const onDecreaseTimerMinute = () => {
    setTimerMinute((prev) => prev - 1);
  }

  const onToggleInterval = (isSession) => {
    if (isSession) {
      setTimerMinute(sessionLength);
    } else {
      setTimerMinute(breakLength);
    }
  }
  const onResetTimer = () => {
    setTimerMinute(sessionLength)
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
        onDecreaseBreakLength={onDecreaseBreakLength}
        onIncreaseSessionLength={onIncreaseSessionLength}
        onDecreaseSessionLength={onDecreaseSessionLength} />
      <Timer
        timerMinute={timerMinute}
        breakLength={breakLength}
        decreaseTimerMinute={onDecreaseTimerMinute}
        toggleInterval={onToggleInterval}
        onResetTimer={onResetTimer}
      />
    </div>
  );

}

export default App;
