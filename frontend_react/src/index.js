import * as React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";
import Home from "./components/Home/Home";
import ApiRecipes from "./components/Recipes/ApiRecipes";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App tab="home" />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="categories"  element={<ApiRecipes/>}/>
                <Route path="recipes/*" element={<Recipes/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    );