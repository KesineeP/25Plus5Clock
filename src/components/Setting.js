import React from 'react'

const Setting = ({ breakInterval, sessionLength, onIncreaseBreakLength, onDecreaseBreakLength }) => {
    const decreaseCounter = () => {
        if (breakInterval === 1) {
            return
        }
        onDecreaseBreakLength()
    };
    const increaseCounter = () => {
        if (breakInterval === 60) {
            return
        }
        onIncreaseBreakLength()
    }
    return (
        <div className='setting'>
            <div className="break-session">
                <div id="break-label" className="label">Break Length</div>
                <div className="setting-button">
                    <button id="break-increment" onClick={decreaseCounter}>-</button>
                    <span id="break-length">{breakInterval}</span>
                    <button id="break-decreament" onClick={increaseCounter}>+</button>
                </div>
            </div>
            <div className="break-session">
                <div id="session-label" className="label">Session Length</div>
                <div className="setting-button">
                    <button id="session-increment">-</button>
                    <span id="session-length">{sessionLength}</span>
                    <button id="session-decrement">+</button>
                </div>
            </div>
        </div>
    )
}

export default Setting;
