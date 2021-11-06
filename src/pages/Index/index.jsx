import React from 'react';

import { useHistory } from "react-router-dom";
import { SIGNUP, } from "../../actions/routes";

import BeatLoader from "react-spinners/BeatLoader";

import { Div } from "./style"
import Logo from "../../assets/images/codeleap_logo_black 1.svg"

const Index = () => {
    const history = useHistory();

    const handleSignup = () => {
        history.push(SIGNUP);
    }

    setTimeout(() => {
        handleSignup()
    }, 1000 * 5);

    return (
        <Div>
            <img src={Logo} alt="codeleap logo" />
            <br />
            <BeatLoader size={20} />
        </Div>
    );
}

export default Index;