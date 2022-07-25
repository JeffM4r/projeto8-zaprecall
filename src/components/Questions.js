import React from "react";
import arrow from "../assets/imgs/setinha.png";

function Question({ question, answer, number, clicked, setClicked, answeredNumber, setAnsweredNumber, setIconsScore, iconsScore, setFinishedCLass, setFinishedText, setCongratulations}) {

    const [card, setCard] = React.useState(true);
    const [showingQuestion, setShowingQuestion] = React.useState(false);
    const [showingAnswer, setShowingAnswer] = React.useState(false);
    const [textDecoration, setTextDecoration] = React.useState(null);
    const [removeIcon, setRemoveIcon] = React.useState(false)
    const [rightIcon, setRightIcon] = React.useState(false);
    const [almostDidntRemenberIcon, setAlmostDidntRemenberIcon] = React.useState(false)
    const [didntRemeberIcon, setDidntRemeberIcon] = React.useState(false)

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
        setAnsweredNumber(answeredNumber + 1)
        setTextDecoration({ textDecoration: "line-through", color: "#FF3030" })
        setDidntRemeberIcon(!didntRemeberIcon)
        setRemoveIcon(!removeIcon)
        setIconsScore(iconsScore => [...iconsScore, <ion-icon name="close-circle" style={{ color: "#FF3030" }} ></ion-icon>])
        setCongratulations(false)
        if(answeredNumber == 3){
            setFinishedCLass("score finished")
            setFinishedText(true)
        }
    }
    function almostDidntRemenber() {
        setShowingAnswer(!showingAnswer)
        setCard(!card)
        setClicked(!clicked)
        setAnsweredNumber(answeredNumber + 1)
        setTextDecoration({ textDecoration: "line-through", color: "#FF922E" })
        setAlmostDidntRemenberIcon(!almostDidntRemenberIcon)
        setRemoveIcon(!removeIcon)
        setIconsScore(iconsScore => [...iconsScore, <ion-icon name="help-circle" style={{ color: "#FF922E" }}></ion-icon>])
        if(answeredNumber == 3){
            setFinishedCLass("score finished")
            setFinishedText(true)
        }
    }
    function remembered() {
        setShowingAnswer(!showingAnswer)
        setCard(!card)
        setClicked(!clicked)
        setAnsweredNumber(answeredNumber + 1)
        setTextDecoration({ textDecoration: "line-through", color: "#2FBE34" })
        setRightIcon(!rightIcon)
        setRemoveIcon(!removeIcon)
        setIconsScore(iconsScore => [...iconsScore, <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>])
        if(answeredNumber == 3){
            setFinishedCLass("score finished")
            setFinishedText(true)
        }
    }


    return (
        <>
            <div className="question" style={card ? { display: "flex" } : { display: "none" }}>
                <p style={textDecoration}>Pergunta {number + 1}</p>
                <ion-icon name="play-outline" onClick={() => { showQuestion() }} style={removeIcon ? { display: "none" } : {}}></ion-icon>
                <ion-icon name="checkmark-circle" style={rightIcon ? { color: "#2FBE34", display: "initial" } : { display: "none" }}></ion-icon>
                <ion-icon name="help-circle" style={almostDidntRemenberIcon ? { color: "#FF922E", display: "initial" } : { display: "none" }}></ion-icon>
                <ion-icon name="close-circle" style={didntRemeberIcon ? { color: "#FF3030", display: "initial" } : { display: "none" }}></ion-icon>
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

function Questions({ answeredNumber, setAnsweredNumber, setIconsScore, iconsScore, setFinishedCLass, setFinishedText, setCongratulations}) {
    let allQuestions = [{ question: "O que é JSX?", answer: "JSX é uma sintaxe para escrever HTML dentro do JS" }, { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" }, { question: "Podemos colocar __ dentro do JSX", answer: "expressões" }, 
    { question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" }, { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" }, 
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes " }, { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }]

    const randomArray = allQuestions.sort(() => Math.random() - 0.5)

    const [clicked, setClicked] = React.useState(false)

    return (
        <div className="questions">
            {randomArray.slice(0, 4).map((question, index) => <Question question={question.question} answer={question.answer} number={index} clicked={clicked} setClicked={setClicked} answeredNumber={answeredNumber} setAnsweredNumber={setAnsweredNumber} iconsScore={iconsScore} setIconsScore={setIconsScore} setFinishedCLass={setFinishedCLass} setFinishedText={setFinishedText} setCongratulations={setCongratulations} key={index} />)}
        </div>
    )
}

export default Questions;