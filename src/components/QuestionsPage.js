import React from "react";
import Questions from "./Questions";
import Score from "./Score";
import smallLogo from "../assets/imgs/logo-pequeno.png";


function QuestionsPage() {
    const [answeredNumber,setAnsweredNumber] = React.useState(0)
    const [finishedClass,setFinishedCLass] = React.useState("score")
    const [iconsScore,setIconsScore] = React.useState([])
    const [congratulations,setCongratulations] = React.useState(true)
    const [finishedText,setFinishedText] = React.useState(false)

    return (
        <>
            <div className="logoName">
                <img src={smallLogo} />
                <h1>ZapRecall</h1>
            </div>
            <Questions answeredNumber={answeredNumber} setAnsweredNumber={setAnsweredNumber} iconsScore={iconsScore} setIconsScore={setIconsScore} setFinishedCLass={setFinishedCLass} setFinishedText={setFinishedText} setCongratulations={setCongratulations}/>
            <Score answeredNumber={answeredNumber} iconsScore={iconsScore} finishedClass={finishedClass} finishedText={finishedText} congratulations={congratulations}/>
        </>
    )
}

export default QuestionsPage;