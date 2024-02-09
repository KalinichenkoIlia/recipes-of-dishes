import  React  from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function Home(){
    return(
        <div className={'Home'}>
            <Header/>
           <Main/>
        </div>

    )
}


export default Home
