import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import '../style/index.scss';
import { Mui_Autocomplete, Mui_Autocomplete_Miasta } from './Autocomplete.js';

const Form = () => {
    const { register, handleSubmit } = useForm()
    const [ulica, setUlica] = useState('');
    const [miasto, setMiasto] = useState('');
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    //--------------- child -> parent
    //ulice
    function handleCallback(childData) {
        setUlica(childData)
    }
    //miasta
    function handleCallback_miasta(childData) {
        //console.log(childData);
        setMiasto(childData)
    }

    /*let updateValue = e => {
        console.log(e);
    }*/

    const onSubmit = (data) => {
        data.miejscowosc=miasto
        data.ulica=ulica

        if (data.imie == ''||data.imie==null) {
            document.getElementById("inp1").style.borderColor = "red";
            document.getElementById("s1").innerText = "puste pole";
        } else {
            document.getElementById("inp1").style.borderColor = "black";
            document.getElementById("s1").innerText = "";
        }
        if (data.nazwisko == ''||data.nazwisko==null) {
            document.getElementById("inp3").style.borderColor = "red";
            document.getElementById("s3").innerText = "puste pole";

        } else {
            document.getElementById("inp3").style.borderColor = "black";
            document.getElementById("s3").innerText = "";
        }

        if (data.telefon == '') {
            document.getElementById("inp5").style.borderColor = "red";
            document.getElementById("s5").innerText = "puste pole";
        } else if (isNumeric(data.telefon) && data.telefon.length == 9) {
            document.getElementById("inp5").style.borderColor = "black";
            document.getElementById("s5").innerText = "";
        } else {
            document.getElementById("inp5").style.borderColor = "red";
            document.getElementById("s5").innerText = "niepoprawny numer";
        }

        const regEx1 = /[a-z0-9_.-]+@[a-z0-9_.-]+\.\w{2,4}/

        if (data.email == ''||data.email==null) {
            document.getElementById("inp6").style.borderColor = "red";
            document.getElementById("s6").innerText = "puste pole";
        } else if (data.email.length > 4 && regEx1.test(data.email)) {
            document.getElementById("inp6").style.borderColor = "black";
            document.getElementById("s6").innerText = "";
        } else {
            document.getElementById("inp6").style.borderColor = "red";
            document.getElementById("s6").innerText = "niepoprawny mail";
        }

        if (data.www != ''||data.email!=null && data.www.includes("http://") != true && data.www.includes("https://") != true) {
            document.getElementById("inp8").style.borderColor = "red";
            document.getElementById("s8").innerText = "zły adres";
        } else {
            document.getElementById("inp8").style.borderColor = "black";
            document.getElementById("s8").innerText = "";
        }

        if (data.miejscowosc == ""||data.miejscowosc==null) {
            document.getElementById(":r1:").style.borderColor = "red";
            document.getElementById("s9").innerText = "puste pole";
            document.getElementById("s9").style.zIndex = 15;

        } else {
            document.getElementById(":r1:").style.borderColor = "black";
            document.getElementById("s9").innerText = "";
        }

        if (data.ulica == ""||data.ulica==null) {
            document.getElementById(":r5:").style.borderColor = "red";
            document.getElementById("s10").innerText = "puste pole";

        } else {
            document.getElementById(":r5:").style.borderColor = "black";
            document.getElementById("s10").innerText = "";
        }

        if (data.n_domu == ''||data.n_domu==null) {
            document.getElementById("inp11").style.borderColor = "red";
            document.getElementById("s11").innerText = "puste pole";

        } else {
            document.getElementById("inp11").style.borderColor = "black";
            document.getElementById("s11").innerText = "";
        }

        const regEx2 = /[0-9]{2}-[0-9]{3}/
        //console.log(regEx.test(data.k_pocztowy))

        if (data.k_pocztowy == ''||data.k_pocztowy==null) {
            document.getElementById("inp13").style.borderColor = "red";
            document.getElementById("s13").innerText = "puste pole";
        } else if (data.k_pocztowy.length == 6 && regEx2.test(data.k_pocztowy)) {
            document.getElementById("inp13").style.borderColor = "black";
            document.getElementById("s13").innerText = "";
        } else {
            document.getElementById("inp13").style.borderColor = "red";
            document.getElementById("s13").innerText = "zły adres";
        }

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form1'>
            <div className='row'>
                {/* imie */}
                <div className='form-group'>
                    <label>
                        imie
                    </label>
                    <input id='inp1' {...register("imie")}></input>
                </div>
                <div id='s1'></div>
            </div>
            <div className='row'>
                {/* Drugie imie */}
                <div className='form-group'>
                    <label>
                        Drugie imie
                    </label>
                    <input id='inp2' {...register("d_imie")}></input>
                    <div id='s2'></div>
                </div>

            </div>
            <div className='row'>
                {/* Nazwisko */}
                <div className='form-group'>
                    <label>
                        Nazwisko
                    </label>
                    <input id='inp3' {...register("nazwisko")}></input>
                </div>
                <div id='s3'></div>
            </div>
            <div className='row'>
                <div className='form-group'>
                    {/* Nazwisko 2 */}
                    <label>
                        Nazwisko
                    </label>
                    <input id='inp4' {...register("d_nazwisko")}></input>
                </div>
                <div id='s4'></div>

            </div>
            <div className='row'>

                <div className='form-group'>
                    {/* Telefon */}
                    <label>
                        Telefon
                    </label>
                    <input id='inp5' {...register("telefon")}></input>

                </div>
                <div id='s5'></div>

            </div>
            <div className='row'>

                <div className='form-group'>
                    {/* Email */}
                    <label>
                        Email
                    </label>
                    <input id='inp6' {...register("email")}></input>

                </div>
                <div id='s6'></div>

            </div>
            <div className='row'>

                <div className='form-group'>
                    {/* fax */}
                    <label>
                        fax
                    </label>
                    <input id='inp7' {...register("fax")}></input>

                </div>
                <div id='s7'></div>
            </div>
            <div className='row'>

                <div className='form-group'>
                    {/* www */}
                    <label>
                        www
                    </label>
                    <input id='inp8' {...register("www")}></input>

                </div>
                <div id='s8'></div>

            </div>
            <div className='row'>

                <div className='form-group'>
                    {/* Miejscowość */}
                    <label>
                        Miejscowość
                    </label>
                    {/* 
                    <input id='inp9' {...register("miejscowosc")}></input>
                    */}
                    <Mui_Autocomplete_Miasta  parentCallback={handleCallback_miasta}/>

                </div>
                <div id='s9'></div>

            </div>
            <div className='row'>

                <div className='form-group'>
                    {/* Ulica */}
                    <label>
                        Ulica
                    </label>
                    {/*
                    <input id='inp10 {...register("n_domu")}></input>
                
                */}

                    <Mui_Autocomplete parentCallback={handleCallback}/>

                </div>
                <div id='s10'></div>

            </div>
            <div className='row'>
                <div className='form-group'>
                    {/* Numer domu */}
                    <label>
                        Numer domu
                    </label>
                    <input id='inp11'></input>

                </div>

                <div id='s11'></div>

            </div>
            <div className='row'>
                <div className='form-group'>
                    {/* Numer lokalu */}
                    <label>
                        Numer lokalu
                    </label>
                    <input id='inp12' {...register("n_lokalu")}></input>

                </div>

                <div id='s12'></div>

            </div>
            <div className='row'>
                <div className='form-group'>
                    {/* Kod pocztowy */}
                    <label>
                        Kod pocztowy
                    </label>
                    <input id='inp13' {...register("k_pocztowy")}></input>

                </div>

                <div id='s13'></div>

            </div>
            {/* button 1 */}
            <input type="submit" disabled value="HISTORIA ZGŁOSZEŃ"></input>
            {/* button 2 */}
            <input type="submit" className='ostatni' value="WYŚLIJ ZGŁOSZENIE"></input>
        </form>
    )
}

export default Form