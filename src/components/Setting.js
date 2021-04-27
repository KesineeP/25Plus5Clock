import React from 'react'

const Setting = ({ breakInterval, sessionLength, onIncreaseBreakLength, onDecreaseBreakLength, onIncreaseSessionLength, onDecreaseSessionLength }) => {
    const decreaseBreak = () => {
        if (breakInterval === 1) return
        onDecreaseBreakLength()

    };
    const increaseBreak = () => {
        if (breakInterval === 60) return;
        onIncreaseBreakLength()
    }
    const decreaseSession = () => {
        if (sessionLength === 1) return;
        onDecreaseSessionLength(sessionLength + 1)
    };
    const increaseSession = () => {
        if (sessionLength === 60) return;
        onIncreaseSessionLength(sessionLength - 1)
    }
    return (
        <div className='setting'>
            <div className="break-session">
                <div id="break-label" className="label">Break Length</div>
                <div className="setting-button">
                    <button id="break-decrement" onClick={decreaseBreak}>-</button>
                    <span id="break-length">{breakInterval}</span>
                    <button id="break-increment" onClick={increaseBreak}>+</button>
                </div>
            </div>
            <div className="break-session">
                <div id="session-label" className="label">Session Length</div>
                <div className="setting-button">
                    <button id="session-decrement" onClick={decreaseSession}>-</button>
                    <span id="session-length">{sessionLength}</span>
                    <button id="session-increment" onClick={increaseSession}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Setting;
