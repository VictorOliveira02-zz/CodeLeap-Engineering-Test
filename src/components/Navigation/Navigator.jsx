import React from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { INDEX, SIGNUP, MAINSCREEN, } from "../../actions/routes";

import Index from "../../pages/Index/index";
import SignUp from "../../pages/SignUp/index";
import MainScreen from "../../pages/MainScreen/index";


function Navigator() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={INDEX} exact component={Index} />
                <Route path={SIGNUP} exact component={SignUp} />
                <Route path={MAINSCREEN} exact component={MainScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default Navigator;