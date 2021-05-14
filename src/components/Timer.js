import React from 'react';

const Timer = ({ timerSecond, timerMinute, onResetTimer, isSession, setIsTimerOn, isTimerOn }) => {


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
    // console.log(timerMinute)
    // console.log(timerSecond)


    return (
        <div id="timer-container">
            <div className="timer">
                <div>
                    <h2 id="timer-label">{isSession ? "Session" : "Break"}</h2>
                </div>
                <div id="time-left">
                    {timerMinute === 0 ? "00" : timerMinute < 10 ? "0" + timerMinute : timerMinute}
                    :
                    {timerSecond === 0 ? "00" : timerSecond < 10 ? "0" + timerSecond : timerSecond}
                </div>
            </div>
            <section className="button-action">
                {!isTimerOn ?
                    <button id="start_stop" onClick={startTimer}>Start</button> :
                    <button id="start_stop" onClick={stopTimer}>Stop</button>}
                <button id="reset" onClick={resetTimer}>Reset</button>
            </section>


        </div >
    )
}

export default Timer
