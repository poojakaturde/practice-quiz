import React from 'react'
import './Home.css';

const Home = () => {
    return (
        <div>
            <marquee width="60%" direction="left" height="100px">
                This is a sample scrolling text that has scrolls texts to left.
            </marquee>
            <div className="grid-container">
                <div className="grid-item">
                    <h1>React Quiz</h1>
                </div>
                <div className="grid-item">
                    <h1>Javascript Quiz</h1>
                </div>
                <div className="grid-item">
                    <h1>Typescript Quiz</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
