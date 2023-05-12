import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Form from './commponents/form.js'
import Login from './commponents/login';
import SignUp from './commponents/signup';
import { NavLink, useNavigate } from 'react-router-dom'

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });

  }, [])

  return (
    <div className="container">
      <nav>
        <div className='nav_btn'>
          <NavLink to="/login">
            Login
          </NavLink>
        </div>
        <div className='nav_btn'>
        <NavLink to="/signup">
          Sign up
        </NavLink>
        </div>
      </nav>
      <h1>Dane korespondencyjne</h1>
      <Form></Form>
    </div>
  );
}

export default App;
