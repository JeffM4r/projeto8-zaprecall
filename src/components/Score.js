import {GoodVerdict, BadVerdict} from "./VerdictText.js";


function Contgratulations({ congratulations }) {
    return(
        <>
            {congratulations? <GoodVerdict/> : <BadVerdict/> }
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