import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { MAINSCREEN } from '../../actions/routes/routes'

import { useDispatch } from 'react-redux'
import { setUserName } from '../../actions/action/username.action.js'

import { Div, DivBox } from "./style"

const SignUp = () => {
    const history = useHistory();

    const dispatch = useDispatch(setUserName);

    const [userLogin, setUserLogin] = useState({ username: "" });

    const SignUpForm = (username) => {
        dispatch(setUserName(username))
        history.push(MAINSCREEN)
    }
    return (
        <Div>
            <DivBox>
                <h1 className="welcome-title">Welcome to CodeLeap Network!</h1>
                <p className="welcome-subtitle">Please enter your username</p>

                <input className="username-input" type="text" placeholder="John doe" required
                    value={userLogin.username} onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
                />

                {userLogin.username.length > 0 ?
                    <button onClick={() => SignUpForm(userLogin.username)} className="sign-up-btn">ENTER</button>
                    :
                    <button disabled type="submit" className="sign-up-btn-disabled"
                        title="Please, fill in the username field!">ENTER</button>
                }

            </DivBox>
        </Div>
    );
}

export default SignUp;