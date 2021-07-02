//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

//HINT: You will need to study the classes in teh styles.css file to appy styling.
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    document.getElementById("root")
);