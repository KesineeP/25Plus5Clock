import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ timerMinute, decreaseTimerMinute, toggleInterval, onResetTimer }) => {
    const [isSession, setIsSession] = useState(true)
    const [timerSecond, setTimerSecond] = useState(0)
    // const [intervalId, setIntervalId] = useState(0)
    const [isTimerOn, setIsTimerOn] = useState(false)
    const isFirstRun = useRef(true);
    let intervalRef = useRef(null);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
    }, [isSession])

    const startTimer = () => {
        if (intervalRef.current) {
            stopTimer();
            return;
        }
        setIsTimerOn(!isTimerOn);
        intervalRef.current = setInterval(() => {
            setTimerSecond((seconds) => {
                if (seconds === 0) {
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
                    setTimerSecond(59);
                }
                return seconds - 1

            })
        }, 1000)
    }

    // const decreaseTimer = () => {
    //     switch (timerSecond) {
    //         case 0:
    //             if (timerMinute === 0) {
    //                 if (isSession) {
    //                     setIsSession(false)
    //                     toggleInterval(isSession)
    //                 } else {
    //                     setIsSession(true)
    //                     toggleInterval(isSession)
    //                 }
    //             } else {
    //                 decreaseTimerMinute();
    //                 setTimerSecond(59);
    //             }
    //             break;
    //         default:
    //             setTimerSecond((prev) => prev - 1)
    //             console.log(timerSecond)
    //             break;
    //     }

    // }


    const stopTimer = () => {
        if (intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsTimerOn(false);
    }
    const resetTimer = () => {
        stopTimer();
        onResetTimer();
        setIsSession(true)
        setTimerSecond(0);
    }
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
