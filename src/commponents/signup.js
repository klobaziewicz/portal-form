import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../style/signup.scss';
import { Button, TextField } from '@mui/material'

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
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
            <form>
              <div>
                <label htmlFor="email-address">
                  Email address
                </label>
                <TextField className='signup_inp' id="outlined-basic" required onChange={(e) => setEmail(e.target.value)} label="email" variant="outlined" />
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
                <label htmlFor="password">
                  Password
                </label>
                <TextField className='signup_inp' id="outlined-basic2" required onChange={(e) => setPassword(e.target.value)} type="password" label="password" variant="outlined" />
                {/*<input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />*/}
              </div>

              <Button variant="contained" onClick={onSubmit}>Sign up</Button>

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