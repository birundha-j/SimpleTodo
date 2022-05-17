import React from "react";
import './test.css'

const Testing = () => {
    return (
        <div className="master">
            <div className="subMaster">
                <div className="inputContent">
                    <input className="input_bx" placeholder="Enter a Name" />
                    <input className="input_bx" placeholder="enter the password"></input>
                    <button className="input_bx loginBtn">Login</button>
                </div>
            </div>

        </div>
    )
}
export default Testing;