import  React  from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Recipes () {
    const {category} = useParams()

    return (
        <div>
            {category}
        </div>

    )
}

export default Recipes