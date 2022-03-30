import React from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { LOADING_PAGE, SIGNUP, MAINSCREEN, } from "./routes.js";

import LoadingPage from "../pages/LoadingPage/index";
import SignUp from "../pages/SignUp/index";
import MainScreen from "../pages/MainScreen/index";


const Navigator = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={LOADING_PAGE} exact component={LoadingPage} />
                <Route path={SIGNUP} exact component={SignUp} />
                <Route path={MAINSCREEN} exact component={MainScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default Navigator;