import React, { useEffect, useState} from "react";
import { useLocation, useParams} from "react-router-dom";
import axios from "axios";
import style from '../../styles/Dish.module.css'

function Dish(){
    const params = useParams();
    const [recipe, setRecipe] = useState([]);
    const location = useLocation();





    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/${params.id}`).then(response => {
            setRecipe(response.data);

        }).catch(error => {
            console.log(error);
        })
    },[useParams().params])

    return(
        <div className={style.container} >
            <ul className={style.list_item}>
                <h2>{recipe.title}</h2>
                <li>{recipe.text}</li>
                <li> <h4>Продукты:</h4>{recipe.products}</li>
                <img src={recipe.file} alt={recipe.title}/>
            </ul>
    </div>
    );
}

export default Dish