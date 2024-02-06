import * as React from "react";
import styles from "../styles/App.module.css"
import Header from "./Header";
import Main from "./Main";


function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App