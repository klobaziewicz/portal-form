import React, { Component, useState, useEffect } from 'react';
import '../style/home.scss'

const Home = () => {
    const [not_loaded, setLoading] = useState(true)
    const [data, setData] = useState({
        czasSesji: 0,
        czyInstytucja: false,
        email: "",
        imie: "",
        login: "",
        nazwisko: "",
        nip: "",
        pesel: ""
    });
    console.log(localStorage.getItem("login"));
    useEffect(() => {
        if (not_loaded) {
            fetch("https://pi.korelacja.eu/EUrzad/api/uzytkownik/userInfo", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "pl",
                    "authorization": "Bearer " + localStorage.getItem("login"),
                },
                "body": null,
                "method": "GET",
                "mode": "cors",
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false)
                })
        }
    })

    return (
        <div className='home'>
            <div className='h1_outline'>
                <h1> login użytkownika:</h1>
                <p>{data.login}</p>
            </div>
            <table className='table'>
                <tbody>
                    <tr>
                        <th>imie</th>
                        <td>{data.imie}</td>
                    </tr>
                    <tr>
                        <th>nazwisko</th>
                        <td>{data.nazwisko}</td>
                    </tr>
                    <tr>
                        <th>email</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th>pesel</th>
                        <td>{data.pesel}</td>
                    </tr>
                    <tr>
                        <th>nip</th>
                        <td>{data.nip}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home