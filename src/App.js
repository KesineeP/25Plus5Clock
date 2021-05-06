import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Timer from './components/Timer.js'
import Setting from './components/Setting.js';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState({ minute: sessionLength, second: 0 });
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const audioRef = useRef(null);


  useEffect(() => {
    if (isTimerOn) {
      const interval = setInterval(() => onDecreaseTimer(timer.minute, timer.second), 100);
      return () => clearInterval(interval);
    }

  }, [isTimerOn, timer.minute, timer.second]);

  const onIncreaseBreakLength = () => {
    setBreakLength((prev) => prev + 1);

  };
  const onDecreaseBreakLength = () => {
    setBreakLength((prev) => prev - 1);
  }
  const onIncreaseSessionLength = () => {
    setSessionLength((prev) => prev + 1);
    setTimer({ ...timer, minute: sessionLength + 1 })
  };
  const onDecreaseSessionLength = () => {
    setSessionLength((prev) => {
      return prev - 1
    });
    setTimer((prev) => {
      return { ...timer, minute: prev.minute - 1 }
    })
  }

  const onDecreaseTimer = () => {
    // console.log('second before switch', timerSecond)
    // console.log('minute before switch', timerMinute)
    switch (timer.second) {
      case 0:
        if (timer.minute === 0) {
          audioRef.current.play()
          if (isSession) {
            setIsSession(false);
            onToggleInterval(isSession);
          } else {
            setIsSession(true);
            onToggleInterval(isSession);
          }

        } else {
          setTimer((prev) => {
            console.log('prev', prev)
            return { minute: prev.minute - 1, second: 59 }
          })
        }
        break;
      default:
        setTimer((prev) => {
          // console.log('Default prev', prev)
          return { ...timer, second: prev.second - 1 }
        })
        break;
    }
  }


  const onToggleInterval = (isSession) => {
    if (isSession) {
      setTimer({ ...timer, minute: breakLength })
    } else {
      setTimer({ ...timer, minute: sessionLength })
    }
  }
  const onResetTimer = () => {
    // audioRef.current.load()
    setSessionLength(25)
    setBreakLength(5)
    setTimer({ minute: 25, second: 0 })
    setIsSession(true)
  }
  const onStartStopTimer = (isTimerOn) => {
    setIsTimerOn(isTimerOn)
  }
  // console.log(timer.minute)
  // console.log(timer.second)
  console.log('session', sessionLength)
  console.log('break', breakLength)
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
        onDecreaseSessionLength={onDecreaseSessionLength}
        isTimerOn={isTimerOn} />
      <Timer
        timerMinute={timer.minute}
        timerSecond={timer.second}
        breakLength={breakLength}
        decreaseTimer={onDecreaseTimer}
        toggleInterval={onToggleInterval}
        onResetTimer={onResetTimer}
        startStopTimer={onStartStopTimer}
        isTimerOn={isTimerOn}
        setIsTimerOn={setIsTimerOn}
        isSession={isSession}
      />
      <audio id="beep" ref={audioRef}>
        <source sarc="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );

}

export default App;
