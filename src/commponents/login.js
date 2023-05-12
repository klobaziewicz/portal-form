import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import '../style/signup.scss';

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user.accessToken);
                localStorage.setItem("login", user.accessToken);
                props.parentCallback(user.accessToken);
                e.preventDefault();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
            <main >
                <section>
                    <div>
                        <h1> FocusApp </h1>

                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <TextField className='signup_inp' id="outlined-basic" required onChange={(e) => setEmail(e.target.value)} label="email" variant="outlined" />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <TextField className='signup_inp' id="outlined-basic" required onChange={(e) => setPassword(e.target.value)} label="password" type="password" variant="outlined" />
                            </div>

                            <div>

                                <Button variant="contained" onClick={onLogin}>Login</Button>
                            </div>
                        </form>

                        <p className="text-btm">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login