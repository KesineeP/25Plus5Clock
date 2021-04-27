import React, { useState } from 'react';

const Timer = ({ timerMinute, decreaseTimerMinute, toggleInterval, onResetTimer }) => {
    const [isSession, setIsSession] = useState(true)
    const [timerSecond, setTimerSecond] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [timerOn, setTimerOn] = useState(true)


    const startTimer = () => {
        let intervalId = setInterval(decreaseTimer, 1000);
        setIntervalId(intervalId);
        setTimerOn(false)
        setTimerSecond(59)
    }
    const decreaseTimer = () => {
        switch (timerSecond) {
            case 0:
                if (timerMinute === 0) {
                    if (isSession) {
                        setIsSession(false)
                        toggleInterval(isSession)
                    } else {
                        setIsSession(true)
                        toggleInterval(isSession)
                    }
                }
                decreaseTimerMinute();
                // setTimerSecond(59);
                console.log(timerSecond)
                break;
            default:
                setTimerSecond((prev) => prev - 1);
                break;
        }

    }
    const stopTimer = () => {
        clearInterval(intervalId)
        setTimerOn(true)
    }
    const resetTimer = () => {
        stopTimer();
        onResetTimer();
        setTimerSecond(0);
    }
    return (
        <div id="timer-container">
            <div className="timer">
                <div id="timer-label">
                    <h2>{isSession === true ? "Session" : "Break"}</h2>
                </div>
                <div id="time-left">
                    <span>{timerMinute}</span>
                    :
                    <span>
                        {timerSecond === 0 ?
                            "00"
                            : timerSecond < 10 ?
                                "0" + timerSecond
                                : timerSecond}
                    </span>
                </div>
            </div>
            <section className="button-action">
                {timerOn ?
                    <button id="start_stop" onClick={startTimer}>Start</button> :
                    <button id="stop_Start" onClick={stopTimer}>Stop</button>}
                <button id="reset" onClick={resetTimer}>Reset</button>
            </section>


        </div >
    )
}

export default Timer
