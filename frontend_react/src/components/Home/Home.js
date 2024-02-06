import  React  from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className={'Home'}>
            <nav className={'categories'}>
                <Link to='categories'>Recipes</Link>
            </nav>
        </div>

    )
}

export default Home
