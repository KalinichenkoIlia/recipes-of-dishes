import  React , {Component} from "react";
import {NavLink} from 'react-router-dom';
import style from '../../styles/RecipeCategories.module.css'

class  RecipeCategories extends Component {
    render() {
        return (
            <>
                <li className={style.category}>
                    <nav>
                        <NavLink to={{pathname: `${this.props.category}`}}>{this.props.category}</NavLink>
                    </nav>
                </li>
            </>
        );
    }
}

export default RecipeCategories;