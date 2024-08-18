import React, { useState } from "react";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../Login/Login.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const validate = () => {
        let emailValid = true;
        let usernameValid = true;
        let passwordValid = true;

        if (!email) {
            setEmailError("Email is required");
            emailValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email is invalid");
            emailValid = false;
        } else {
            setEmailError("");
        }

        if (!username) {
            setUsernameError("Username is required");
            usernameValid = false;
        } else {
            setUsernameError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            passwordValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            passwordValid = false;
        } else {
            setPasswordError("");
        }

        return emailValid && usernameValid && passwordValid;
    };

    const createUser = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        
        try {
            const response = await Axios.post('http://localhost:3002/register', {
                email: email,
                username: username,
                password: password
            });

            if (response.data.message === 'User Added!') {
                navigate('/login'); // Redirect to login page on successful registration
            } else {
                setError("An error occurred. Please try again.");
            }
        } catch (err) {
            // Handle errors based on the backend response
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="" alt="logo" />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                <form className="pt-3" onSubmit={createUser}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="exampleInputUsername1"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        />
                                        {usernameError && <div className="alert alert-danger" role="alert">{usernameError}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        {emailError && <div className="alert alert-danger" role="alert">{emailError}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        {passwordError && <div className="alert alert-danger" role="alert">{passwordError}</div>}
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SIGN UP</button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Already have an account? <Link to="/login" className="text-primary">Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
