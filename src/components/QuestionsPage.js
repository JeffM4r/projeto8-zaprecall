import React from "react";

function QuestionsPage(){
    return (
        <>
            <div className="logoName">
                <img src="./imgs/logo-pequeno.png" />
                <h1>ZapRecall</h1>                
            </div>
            <div className="questions">
                <div className="question"><p>Pergunta 1</p> <ion-icon name="play-outline"></ion-icon></div>
                <div className="question"><p>Pergunta 2</p> <ion-icon name="play-outline"></ion-icon></div>
                <div className="question"><p>Pergunta 3</p> <ion-icon name="play-outline"></ion-icon></div>
                <div className="question"><p>Pergunta 4</p> <ion-icon name="play-outline"></ion-icon></div>
            </div>
            <div className="score">0/4 concluidos</div>
        </>
    )
}

export default QuestionsPage;