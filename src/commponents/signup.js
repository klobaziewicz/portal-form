import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../style/signup.scss';
import $ from "jquery";
import jQuery from 'jquery';
import jQueryUi from 'jquery-ui';
import 'jquery-ui';

import { Button, TextField } from '@mui/material'

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [email2, setEmail2] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    $(function () {
      $("#dialog").css("display", "block")
    })
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, email2, password)
      .then((userCredential) => {
        //if()
        // Signed in
        if (email == email2) {
          //const user = userCredential.user;
          console.log(email + ' ' + email2);
          navigate("/login");
        } else {
          //window.alert('inne adresy email')
          //let email_style = document.getElementById('email')
          //console.log(email_style);
          //email_style.style.bgcolor = "red";
          $(function () {
            $("#dialog").css("z-index", "90");
            $("#dialog").css("display", "block");
          })
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });


  }

  return (
    <main >
      <section>
        <div>
          <div>
            <h1> Form-App </h1>
            <div id="dialog" title="Basic dialog"><p>różniące się adresy</p> <div onClick={() => {
              $(function () {
                $("#dialog").css("display", "none");
              })
            }}>Ok</div>
            </div>
            <form>
              <div>
                <label htmlFor="email-address">
                  Email address
                </label>
                <TextField id='email' color="error" className='signup_inp' required onChange={(e) => setEmail(e.target.value)} label="email" variant="outlined" />
                {/*<input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
              />*/}
              </div>
              <div>
                <label htmlFor="email-address2">
                  Repeat email address
                </label>
                <TextField className='signup_inp email2' required onChange={(e) => setEmail2(e.target.value)} label="email2" variant="outlined" />
              </div>

              <div>
                <label htmlFor="password">
                  Password
                </label>
                <TextField className='signup_inp' required onChange={(e) => setPassword(e.target.value)} type="password" label="password" variant="outlined" />
                {/*<input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />*/}
              </div>

              <Button variant="contained" onClick={onSubmit}
              >Sign up</Button>

            </form>

            <p className="text-btm">
              Already have an account?{' '}
              <NavLink to="/login" >
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignUp