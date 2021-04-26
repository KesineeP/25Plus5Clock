import React, { useState } from 'react';

const Timer = ({ timerMinute }) => {
    const [isSession, setIsSession] = useState(true)
    const [timerSecond, setTimerSecond] = useState(0)
    const [startStop, setStartStop] = useState('Start')
    return (
        <div id="timer-container">
            <div className="timer">
                <div id="timer-label">
                    <h2>{isSession === true ? "Session" : "Break"}</h2>
                </div>
                <div id="time-left">
                    <span>{timerMinute}</span> : <span>{timerSecond === 0 ? "00" : timerSecond < 10 ? "0" + timerSecond : timerSecond}</span>
                </div>
            </div>
            <section className="button-action">
                <button id="start_stop">{startStop}</button>
                <button id="reset">Reset</button>
            </section>


        </div >
    )
}

export default Timer
