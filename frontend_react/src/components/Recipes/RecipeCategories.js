import  React , {Component} from "react";
import { Link } from 'react-router-dom';


class  RecipeCategories extends Component {
    render() {
        return (
            <>
                <li>
                    <nav>
                        <Link to={{pathname: `${this.props.category}`}}>{this.props.category}</Link>
                    </nav>
                </li>
            </>

        );
    }
}

export default RecipeCategories;