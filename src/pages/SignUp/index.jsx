import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { MAINSCREEN } from '../../actions/routes/routes'

import { Div, FormBox } from "./style"

const SignUp = () => {
    const history = useHistory();
    const [userLogin, setUserLogin] = useState({ username: "" });

    const SignUpForm = () => {
        history.push(MAINSCREEN)
    }

    return (
        <Div>
            <FormBox onSubmit={SignUpForm}>
                <h1 className="welcome-title">Welcome to CodeLeap Network!</h1>
                <p className="welcome-subtitle">Please enter your username</p>

                <input className="username-input" type="text" placeholder="John doe" required
                    value={userLogin.username} onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })}
                />

                {userLogin.username.length > 0 ?
                    <button type="submit" className="sign-up-btn">ENTER</button>
                    :
                    <button disabled type="submit" className="sign-up-btn-disabled"
                        title="Please, fill in the username field!">ENTER</button>
                }

            </FormBox>
        </Div>
    );
}

export default SignUp;