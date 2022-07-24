import React from "react";
import arrow from "../assets/imgs/setinha.png";

function Question({ question, answer, number, clicked, setClicked }) {

    const [card, setCard] = React.useState(true);
    const [showingQuestion, setShowingQuestion] = React.useState(false);
    const [showingAnswer, setShowingAnswer] = React.useState(false);

    function showQuestion() {
        if (clicked) {
            return
        }
        setClicked(!clicked)
        setCard(!card);
        setShowingQuestion(!showingQuestion)
    }

    function showAnswer() {
        setShowingQuestion(!showingQuestion)
        setShowingAnswer(!showingAnswer)
    }

    function didntRemeber() {
        setShowingAnswer(!showingAnswer)
        setCard(!card)
        setClicked(!clicked)
    }
    function almostDidntRemenber() {
        setShowingAnswer(!showingAnswer)
        setCard(!card)
        setClicked(!clicked)
    }
    function remembered() {
        setShowingAnswer(!showingAnswer)
        setCard(!card)
        setClicked(!clicked)
    }


    return (
        <>
            <div className="question" style={card ? { display: "flex" } : { display: "none" }}>
                <p>Pergunta {number + 1}</p>
                <ion-icon name="play-outline" onClick={() => { showQuestion() }}></ion-icon>
            </div>
            <div className="questionShown" style={showingQuestion ? { display: "initial" } : { display: "none" }}>
                <p>{question}</p>
                <img src={arrow} onClick={() => { showAnswer() }} />
            </div>
            <div className="questionAnswered" style={showingAnswer ? { display: "initial" } : { display: "none" }}>
                <p>{answer}</p>
                <div className="options">
                    <button className="wrong" onClick={() => { didntRemeber() }}>Não lembrei</button>
                    <button className="almost" onClick={() => { almostDidntRemenber() }}>Quase não lembrei</button>
                    <button className="right" onClick={() => { remembered() }}>Zap!</button>
                </div>
            </div>
        </>
    )
}

function Questions() {
    let allQuestions = [{ question: "O que é JSX?", answer: "JSX é uma sintaxe para escrever HTML dentro do JS" }, { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" }, { question: "Podemos colocar __ dentro do JSX", answer: "expressões" }]

    const [clicked, setClicked] = React.useState(false)

    return (
        <div className="questions">
            {allQuestions.map((question, index) => <Question question={question.question} answer={question.answer} number={index} clicked={clicked} setClicked={setClicked} key={index} />)}
        </div>
    )
}

export default Questions;