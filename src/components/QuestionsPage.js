import React from "react";
import smallLogo from "../assets/imgs/logo-pequeno.png";
import partyEmote from "../assets/imgs/party.png";
import sadEmote from "../assets/imgs/sad.png";
import arrow from "../assets/imgs/setinha.png";

function QuestionsPage() {
    return (
        <>
            <div className="logoName">
                <img src={smallLogo} />
                <h1>ZapRecall</h1>
            </div>
            <div className="questions">
                <div className="question"><p>Pergunta 1</p> <ion-icon name="play-outline"></ion-icon></div>
                <div className="question"><p>Pergunta 2</p> <ion-icon name="play-outline"></ion-icon></div>
                <div className="question"><p>Pergunta 3</p> <ion-icon name="play-outline"></ion-icon></div>
                <div className="questionShown">
                    <p>O que é JSX?</p>
                    <img src={arrow}/>
                </div>
                <div className="questionAnswered">
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <div className="options">
                        <button className="wrong">Não lembrei</button>
                        <button className="almost">Quase não lembrei</button>
                        <button className="right">Zap!</button>
                    </div>
                </div>
                {/* <div className="question"><p>Pergunta 4</p> <ion-icon name="play-outline"></ion-icon></div> */}
            </div>
            <div className="score">
                {/* <div className="WrongRight">
                    <img src={partyEmote} />
                    Parabéns!
                </div>
                <div className="text">
                    <p>Você não esqueceu de nenhum flashcard! </p>
                </div> */}
                <p>
                    4/4 concluidos
                </p>
                <div>
                    <ion-icon name="close-circle" style={{ color: "#FF3030" }} ></ion-icon>
                    <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>
                    <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>
                    <ion-icon name="help-circle" style={{ color: "#FF922E" }}></ion-icon>
                </div>
            </div>
        </>
    )
}

export default QuestionsPage;