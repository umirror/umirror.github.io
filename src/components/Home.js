import React from "react";
import "./Css/Home.css"

function Home() {
    console.log("")
    return(
        <div className="main">
            <section className="welcome">
                <div className="welcome-wrapper">
                    <h3>uMirror</h3>
                    <h4>O espelho que cuida de você</h4>
                </div>
            <div className="scroll"></div>
            </section>
        </div>
    )
}

export default Home;