import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { TextField, FormControlLabel, Checkbox } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { body } from '@mui/material/CssBaseline';
import '../style/signup.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    let check = 0
    if (data.imie == '') {
      document.getElementsByClassName("p1")[0].style.visibility = 'visible'
    } else {
      document.getElementsByClassName("p1")[0].style.visibility = 'hidden'
      check++
    }
    if (data.nazwisko == '') {
      document.getElementsByClassName("p2")[0].style.visibility = 'visible'
    } else {
      document.getElementsByClassName("p2")[0].style.visibility = 'hidden'
      check++
    }
    if (data.login == '') {
      document.getElementsByClassName("p3")[0].style.visibility = 'visible'
    } else {
      document.getElementsByClassName("p3")[0].style.visibility = 'hidden'
      check++
    }
    if (data.haslo2 == '') {
      document.getElementsByClassName("p5")[0].style.visibility = 'visible'
      document.getElementsByClassName("p5")[0].innerText = 'puste pole'
    } else {
      document.getElementsByClassName("p5")[0].style.visibility = 'hidden'
    }
    if (data.haslo2 != data.haslo) {
      document.getElementsByClassName("p4")[0].style.visibility = 'visible'
      document.getElementsByClassName("p4")[0].innerText = 'hasła się różnią'
      document.getElementsByClassName("p5")[0].style.visibility = 'visible'
      document.getElementsByClassName("p5")[0].innerText = 'hasła się różnią'
    } else if (data.haslo.length >= 6) {
      check++
    }
    if (data.haslo == '') {
      document.getElementsByClassName("p4")[0].style.visibility = 'visible'
    } else if (data.haslo.length < 6) {
      document.getElementsByClassName("p4")[0].style.visibility = 'visible'
      document.getElementsByClassName("p4")[0].innerText = 'hasło musi mieć >= 6 znaków'
    } else {
      document.getElementsByClassName("p4")[0].style.visibility = 'hidden'
    }
    const regEx_email = /[a-z0-9_.-]+@[a-z0-9_.-]+\.\w{2,4}/
    if (data.email == '') {
      document.getElementsByClassName("p6")[0].style.visibility = 'visible'
    } else if (regEx_email.test(data.email) == 'false') {
      document.getElementsByClassName("p6")[0].style.visibility = 'visible'
      document.getElementsByClassName("p6")[0].innerText = 'błędny email'
    } else {
      document.getElementsByClassName("p6")[0].style.visibility = 'hidden'
    } if (data.email2 == data.email) {
      check++
    }
    if (data.email2 == '') {
      document.getElementsByClassName("p7")[0].style.visibility = 'visible'
      document.getElementsByClassName("p7")[0].innerText = 'puste pole'
    } else {
      document.getElementsByClassName("p7")[0].style.visibility = 'hidden'
    }
    if (data.email2 != data.email) {
      document.getElementsByClassName("p6")[0].style.visibility = 'visible'
      document.getElementsByClassName("p6")[0].innerText = 'emaile się różnią'
      document.getElementsByClassName("p7")[0].style.visibility = 'visible'
      document.getElementsByClassName("p7")[0].innerText = 'emaile się różnią'
    }
    //
    const regEx_pesel = /^\d{11}$/
    console.log(regEx_pesel.test(data.pesel));
    if (data.pesel.length != 11) {
      document.getElementsByClassName("p8")[0].style.visibility = 'visible'
    } else {
      document.getElementsByClassName("p8")[0].style.visibility = 'hidden'
      check++
    }
    //check
    console.log(check);
    if (check == 6) {

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({ imie: data.imie, nazwisko: data.nazwisko, login: data.login, haslo: data.haslo, email: data.email, pesel: data.pesel, nip: data.nip, returnUrl: "http://localhost:3000" })
      };
      fetch('https://pi.korelacja.eu/EUrzad/api/uzytkownicy/rejestracjaUzytkownika', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          navigate("/login");
        })



    }
  }

  return (
    <form className='signup' onSubmit={handleSubmit(onSubmit)}>
      <h1>Rejestracja</h1>
      <div className='text-fields'>
        <TextField
          id="imie"
          {...register("imie")}
          label="Imie"
          multiline
          variant="standard"
        />
        <p className='p1'>puste pole</p>
        <TextField
          id="nazwisko"
          {...register("nazwisko")}
          label="Nazwisko"
          multiline
          variant="standard"
        />
        <p className='p2'>puste pole</p>
        <TextField
          id="login"
          {...register("login")}
          label="Login"
          multiline
          variant="standard"
        />
        <p className='p3'>puste pole</p>
        <TextField
          id="haslo"
          {...register("haslo")}
          label="Hasło"
          type="password"
          variant="standard"
        />
        <p className='p4'>puste pole</p>
        <TextField
          id="haslo2"
          {...register("haslo2")}
          label="Powtórz hasło"
          type="password"
          variant="standard"
        />
        <p className='p5'>puste pole</p>
        <TextField
          id="email"
          {...register("email")}
          label="Email"
          multiline
          variant="standard"
        />
        <p className='p6'>puste pole</p>
        <TextField
          id="email2"
          {...register("email2")}
          label="Powtórz Email"
          multiline
          variant="standard"
        />
        <p className='p7'>puste pole</p>
        <TextField
          id="pesel"
          {...register("pesel")}
          label="Pesel"
          multiline
          variant="standard"
        />
        <p className='p8'>nieprawidłowy pesel</p>
        <TextField
          id="nip"
          {...register("nip")}
          label="NIP"
          multiline
          variant="standard"
        />
      </div>
      <div className='chx_fields'>
        <FormControlLabel required control={<Checkbox />} label="Wyrażam zgodę na przetwarzanie danych osobowych w zakresie niezbędnymdo prowadzenia Konta Użytkownika." />
        <FormControlLabel required control={<Checkbox />} label="Zapoznałem się z ZAKRESEM I WARUNKAMI KORZYSTANIA Z PORTALU INTERESANTA" />
      </div>
      <div className="submit_fields">
        <input type="submit" className='btn_reg' value="ZAREJESTRUJ"></input>
        <button disabled className='btn_reg'>COFNIJ</button>
      </div>
    </form>
  );
}

export default SignUp;