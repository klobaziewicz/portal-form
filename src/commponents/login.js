import React, { useState } from 'react';
//import { signInWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import '../style/signup.scss';

const Login = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();

        console.log(login + ' ' + password);
        if (login != '' && password != '') {
            const requestOptions = {
                headers: {
                    accept: "application/json, text/plain, */*",
                    "accept-language": "pl",
                    "content-type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({ "haslo": password, "login": login, "recaptcha": null }),
                method: "POST",
                mode: "cors",
            }

            fetch("https://pi.korelacja.eu/EUrzad/api/uzytkownicy/getToken", requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data.opis)
                    if (data.opis == 'Niepoprawne dane autoryzacyjne login/hasło') {
                        alert(data.opis)
                    } else {
                        localStorage.setItem("login", data.token);
                        navigate("/home");
                    }
                })
        } else {
            console.log('nie podano loginu i hasla');
        }

    }

    return (
        <div className='login'>
            <h1> FocusApp </h1>

            <form>
                <div className='inp-row'>
                    <TextField className='signup_inp' id="outlined-basic" required onChange={(e) => setLogin(e.target.value)} label="login" variant="outlined" />
                </div>

                <div className='inp-row'>
                    <TextField className='signup_inp' id="outlined-basic" required onChange={(e) => setPassword(e.target.value)} label="password" type="password" variant="outlined" />
                </div>

                <div>

                    <Button variant="contained" onClick={onLogin}>Login</Button>
                </div>
            </form>

            {/*
                        <p className="text-btm">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                    */}
        </div>
    )
}

export default Login