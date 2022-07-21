import React from "react";

function WelcomeScreen() {
    return (
        <>
            <div className="logo">
                <img src="./imgs/logo.png"/>
            </div>
            <div className="Name">
                <h1>ZapRecall</h1>
            </div>
            <div className="startButton">
                <button>Iniciar Recall!!</button>
            </div>
        </>
    )
}

export default WelcomeScreen;