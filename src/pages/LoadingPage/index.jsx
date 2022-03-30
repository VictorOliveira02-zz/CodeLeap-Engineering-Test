import React from "react";

import { useHistory } from "react-router-dom";
import { SIGNUP } from "../../Navigation/routes";

import BeatLoader from "react-spinners/BeatLoader";

import { Div } from "./style"
import Logo from "../../assets/images/codeleap_logo_black 1.svg"

const LoadingPage = () => {
    const history = useHistory();

    const handleSignup = () => {
        history.push(SIGNUP);
    }

    setTimeout(() => {
        handleSignup()
    }, 1000 * 6);

    return (
        <Div>
            <img className="logo-img" src={Logo} alt="codeleap logo" />
            <BeatLoader size={20} />
        </Div>
    );
}

export default LoadingPage;