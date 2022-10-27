import React from "react";
import "./Css/Home.css"

function Home() {

    return (
        <div className="main">
            {/* <div className="intro">
                <h1 className="logo_header">
                    <span className="logo">u</span><span className="logo">Mirror</span>
                </h1>
            </div> */}

            <section className="welcome">
                <div className="welcome-wrapper">
                    <h3>
                        <p className="welcome-logo">u</p>
                        <p className="welcome-logo">Mirror</p>
                    </h3>
                    <h4>O espelho que cuida de você</h4>
                </div>
                <div className="scroll-wrapper" onClick={() =>{
                    window.location.replace('/.main-body')
                }}>
                <div className="scroll"></div>
                </div>
            </section>
        </div>
    )
}

export default Home;