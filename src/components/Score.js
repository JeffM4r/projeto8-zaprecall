import partyEmote from "../assets/imgs/party.png";
import sadEmote from "../assets/imgs/sad.png";

function Score() {
    return (
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
    )
}

export default Score;