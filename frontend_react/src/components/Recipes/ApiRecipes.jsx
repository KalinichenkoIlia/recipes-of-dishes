import  React , {Component} from "react";
import axios from "axios";
import RecipeCategories from "./RecipeCategories";
import { Outlet } from 'react-router-dom';
import Header from "../Header";
import style from '../../styles/ApiRecipes.module.css'


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
        return (
            <div>
                <Header/>
                <div className={style.block_ApiRecipes} >
                    <ul className={style.ApiRecipes}>
                        {
                            this.state.data.map(
                                el => (
                                    <RecipeCategories key={el.id} category={el.name_category} id={el.id}/>
                                )
                            )
                        }
                    </ul>

                    <main className={style.container}>
                        <Outlet />
                    </main>

                </div>
            </div>

        )

    }
}


export default ApiRecipes