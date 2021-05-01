import React, { useState, useRef, useEffect } from 'react';

const Timer = ({ timerSecond, timerMinute, decreaseTimer, onResetTimer, isSession, setIsTimerOn, isTimerOn }) => {

    useEffect(() => {
        if (isTimerOn) {
            const interval = setInterval(() => decreaseTimer(timerMinute, timerSecond), 1000);
            return () => clearInterval(interval);
        }

    }, [isTimerOn, timerMinute, timerSecond]);
    const startTimer = () => {
        setIsTimerOn(true);
    }

    const stopTimer = () => {
        setIsTimerOn(false);
    }
    const resetTimer = () => {
        stopTimer();
        onResetTimer();
    }
    console.log(timerMinute)
    console.log(timerSecond)
    return (
        <div id="timer-container">
            <div className="timer">
                <div id="timer-label">
                    <h2>{isSession ? "Session" : "Break"}</h2>
                </div>
                <div id="time-left">
                    <span>{timerMinute}</span>
                    <span> : </span>
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
                {!isTimerOn ?
                    <button id="start_stop" onClick={startTimer}>Start</button> :
                    <button id="stop_Start" onClick={stopTimer}>Stop</button>}
                <button id="reset" onClick={resetTimer}>Reset</button>
            </section>


        </div >
    )
}

export default Timer
