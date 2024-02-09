import * as React from "react";
import styles from "../styles/App.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Recipes from "./Recipes/Recipes";
import Dish from "./Recipes/Dish";



function App() {
    return (
        <div className={'App'}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/:category" element={<Recipes/>}/>
                    <Route path="/:category/:id" element={<Dish/>}/>
                </Routes>
        </div>
    )
}

export default App