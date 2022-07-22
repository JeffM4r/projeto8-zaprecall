import React from "react";
import logo from "../assets/imgs/logo.png"

function WelcomeScreen({changePage, setChangePage}) {
    return (
        <>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="Name">
                <h1>ZapRecall</h1>
            </div>
            <div className="startButton">
                <button onClick={() => setChangePage(!changePage)}>Iniciar Recall!!</button>
            </div>
        </>
    )
}

export default WelcomeScreen;