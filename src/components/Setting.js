import React from 'react'

const Setting = () => {
    return (
        <div className='setting'>
            <div className="break-session">
                <div id="break-label" className="label">Break Length</div>
                <div className="setting-button">
                    <button id="break-increment">up</button>
                    <span id="break-length">5</span>
                    <button id="break-decreament">down</button>
                </div>
            </div>
            <div className="break-session">
                <div id="session-label" className="label">Session Length</div>
                <div className="setting-button">
                    <button id="session-increment">up</button>
                    <span id="session-length">25</span>
                    <button id="session-decrement">down</button>
                </div>
            </div>
        </div>
    )
}

export default Setting;
