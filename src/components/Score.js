import partyEmote from "../assets/imgs/party.png";
import sadEmote from "../assets/imgs/sad.png";

function Good(){
    return (
        <>
            <div className="WrongRight">
                <img src={partyEmote} />
                Parabéns!
            </div>
            <div className="text">
                <p>Você não esqueceu de nenhum flashcard! </p>
            </div>
        </>
    )
}

function Bad(){
    return (

        <>
            <div className="WrongRight">
                <img src={sadEmote} />
                Putz...
            </div>
            <div className="text">
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
            </div>
        </>

    )
}

function Contgratulations({ congratulations }) {
    console.log(congratulations)
    return(
        <>
            {congratulations? <Good/> : <Bad/> }
        </>
    )
}




function Score({ answeredNumber, iconsScore, finishedClass, finishedText, congratulations }) {
    return (
        <div className={finishedClass}>
            {finishedText ? <Contgratulations congratulations={congratulations}/> : ""}
            <p>
                {answeredNumber}/4 concluidos
            </p>
            <div>
                {iconsScore}
            </div>
        </div>
    )
}

export default Score;