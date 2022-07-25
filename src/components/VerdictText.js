import partyEmote from "../assets/imgs/party.png";
import sadEmote from "../assets/imgs/sad.png";

function GoodVerdict(){
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

function BadVerdict(){
    return (

        <>
            <div className="WrongRight">
                <img src={sadEmote} />
                Putz...
            </div>
            <div className="text" >
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
            </div>
        </>

    )
}

export {BadVerdict,GoodVerdict};