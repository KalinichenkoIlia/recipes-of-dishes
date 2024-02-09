import * as React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Dish from "./components/Recipes/Dish";


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App tab="home" />
        </BrowserRouter>
    </React.StrictMode>
    );