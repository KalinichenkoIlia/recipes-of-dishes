import * as React from "react";
import styles from "../styles/Header.module.css";


function Header(props) {
    return(
        <header className={styles.header}>
            <h1>Recipes</h1>
            <div>
                <a href='http://localhost:8000/swagger-ui/'>Swagger</a>
            </div>

                <a href='http://localhost:8000'>Api Root</a>
        </header>
    )
}
export default Header