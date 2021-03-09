import React from 'react';
import './App.css'
import {FaUserAlt} from 'react-icons/fa';
import './login.css';


const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailErorr, passwordError } = props;
    return (
        <section className="login">
            <div className="login-wrapper">
                <div className="login-icon"><FaUserAlt /></div>
                <label>Username:</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p className="errorMessage">{emailErorr}</p>
                <label>Password:</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <p className="errorMessage">{passwordError}</p>
                <div className="button-container">
                    {hasAccount ? (
                        <div>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </div>
                    ) : (
                            <div>
                                <button onClick={handleSignup}>Sign up</button>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Login;