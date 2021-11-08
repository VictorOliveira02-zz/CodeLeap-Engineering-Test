import React from 'react';
import { Div, DivBox } from "./style"

const SignUp = () => {
    return (
        <Div>
            <DivBox>
                <h1 className="welcome-title">Welcome to CodeLeap Network!</h1>
                <p className="welcome-subtitle">Please enter your username</p>
                <input className="username-input" type="text" placeholder="John doe" />
                <button type="submit" className="sign-up-btn">ENTER</button>
            </DivBox>
        </Div>
    );
}

export default SignUp;