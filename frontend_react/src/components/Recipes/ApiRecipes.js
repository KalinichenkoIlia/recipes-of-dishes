import  React , {Component} from "react";
import axios from "axios";
import RecipeCategories from "./RecipeCategories";


class ApiRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        axios.get('http://127.0.0.1:8000/categories/')
            .then(response => {
                this.setState({
                    isLoaded: true,
                    data: response.data
                });
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (!this.state.isLoaded ? "loading..." : (
            <div>

                {
                    this.state.data.map(
                        el => (
                            <RecipeCategories key={el.id} category={el.name_category} id={el.id}/>
                        )
                    )
                }
            </div>
        ))

    }
}


export default ApiRecipes