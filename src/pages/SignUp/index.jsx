import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { MAINSCREEN } from '../../Navigation/routes';

import { useDispatch } from 'react-redux'
import { setUserName } from '../../actions/action/username.action.js'

import { Container, Div } from "./style"

const SignUp = () => {
    const history = useHistory();

    const dispatch = useDispatch(setUserName);

    const [userLogin, setUserLogin] = useState({ username: "" });

    const SignUpForm = (username) => {
        dispatch(setUserName(username))
        history.push(MAINSCREEN)
    }

    return (
        <Container>
            <Div>
                <h1 className="welcome-title">Welcome to CodeLeap Network!</h1>
                <p>Please, enter your username</p>

                <input className="username-input" type="text" placeholder="John doe" required
                    value={userLogin.username} onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
                />

                {userLogin.username.length > 0 ?
                    <button onClick={() => SignUpForm(userLogin.username)} className="sign-up-btn">ENTER</button>
                    :
                    <button disabled className="sign-up-btn-disabled"
                        title="Please, fill in the username field!">ENTER</button>
                }

            </Div>
        </Container>
    );
}

export default SignUp;