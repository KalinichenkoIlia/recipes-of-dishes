import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import styles from "../../styles/Recipes.module.css"


function Recipes () {
    const {category} = useParams();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/?category=${category}`).then(response => {
            setRecipes(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[category])


    return (
        <div className={'recipes'}>
            {recipes.map(recipe => <ul key={recipe.id}>
                <Link to={{pathname: `${recipe.id}`}}>{recipe.title}</Link>
            </ul> )}
        </div>

    )
}

export default Recipes