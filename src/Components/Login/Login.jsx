import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';


const Login = () => {
    const [loginusername, setLoginusername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3002/login', {
                username: loginusername,
                password: loginPassword
            });
            if (response.data.message === 'Login successful') {
                localStorage.setItem('authToken', response.data.token); // 
                navigate('/dashboard'); // Redirect to dashboard on successful login
            } else {
                setError(response.data.message || "An unexpected error occurred. Please try again.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Username and Password don't match. Please try again.");
        }
    };

    return (
        <div className="container-scroller ">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="" alt="logo" />
                                </div>
                                <h4>Hello! Let's get started</h4>
                                <h6 className="font-weight-light">Sign in to continue</h6>
                                {error && (
                                    <div className="alert alert-danger" role="alert">{error}</div>
                                )}
                                <form className="pt-3 flex-row" onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="exampleInputUsername"
                                            placeholder="Username"
                                            value={loginusername}
                                            onChange={(event) => setLoginusername(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword"
                                            placeholder="Password"
                                            value={loginPassword}
                                            onChange={(event) => setLoginPassword(event.target.value)}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                            type="submit"
                                        >
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" />
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <a href="#" className="auth-link text-black">Forgot password</a>
                                    </div>
                                    <div className="mb-2">
                                        <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                                            <i className="typcn typcn-social-facebook mr-2"></i>Connect using Facebook
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
