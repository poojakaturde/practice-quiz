import React from 'react'
import './Rules.css';

const Rules = () => {
    return (
        <div>
            <h3 className="ruleHeader">Rules to appear for test</h3>
            <ul className="ulcss">
                <li>User has to register themselves to appear for the test </li>
                <li>You can select any practice quiz from given. </li>
                <li>Practice test contains 15 Questions.</li>
                <li>Each question has 1 mark. </li>
                <li>Time limit for the test will be 30 minutes. </li>
                <li>Your score will be calculated once you submit the test. </li>
                <li>Do not restart/refresh, otherwise you have to start from the beginning. </li>
            </ul>
        </div>
    )
}

export default Rules
