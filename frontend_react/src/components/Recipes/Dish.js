import React, {Component, useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";

function Dish(){
    const params = useParams();
    const [recipe, setRecipe] = useState([]);
    const location = useLocation();
    const id = location.pathname.slice(-1)


    console.log(id)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/${id}`).then(response => {
            setRecipe(response.data);

        }).catch(error => {
            console.log(error);
        })
    },[useParams().params])

    return(
        <div>
        <Link to='/'>Home</Link>
            <ul>
                <h2>{recipe.title}</h2>
                <li>{recipe.text}</li>
                <li> <h4>Продукты:</h4>{recipe.products}</li>
                <li>{}</li>
            </ul>
    </div>
    );
}

export default Dish