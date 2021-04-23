import React from 'react'

const Clock = () => {
    return (
        <div id="timer-container">
            <div id="timer-label">Session</div>
            <div id="time-left">mm:ss</div>
            <button id="start_stop">Start</button>
            <button id="reset">Reset</button>
        </div>
    )
}

export default Clock
