import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import QuestionsPage from "./QuestionsPage";
import "../assets/css/Reset.css";
import "../assets/css/Style.css"



function App() {
    const [changePage, setChangePage] = React.useState(false)


    return (
        <>
            {changePage ? <QuestionsPage /> : <WelcomeScreen changePage={changePage} setChangePage={setChangePage}/>}           
        </>
    );
}

export default App;