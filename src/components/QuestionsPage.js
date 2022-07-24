import React from "react";
import Questions from "./Questions";
import Score from "./Score";
import smallLogo from "../assets/imgs/logo-pequeno.png";


function QuestionsPage() {
    return (
        <>
            <div className="logoName">
                <img src={smallLogo} />
                <h1>ZapRecall</h1>
            </div>
            <Questions/>
            <Score/>
        </>
    )
}

export default QuestionsPage;