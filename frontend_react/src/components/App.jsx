import * as React from "react";
import  "../styles/App.module.css";
import { Routes, Route } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import Dish from "./Recipes/Dish";
import ErrorPage from "./ErrorPage"
import ApiRecipes from "./Recipes/ApiRecipes";
import Main from "./Main";



function App() {
    return (
        <>
            <Routes basename='/'>
                <Route path="/" element={<ApiRecipes/>}>
                    <Route index element={<Main/>} />
                    <Route path="/:category" element={<Recipes/>}/>
                    <Route path="/:category/:id" element={<Dish/>}/>

                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App ;

