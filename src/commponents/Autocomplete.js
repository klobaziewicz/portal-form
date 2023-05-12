import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from '@mui/material'
import data from '../data/ulice.json';

let unikalny = []
let ulice = ['']
let miasta = ['','Kraków', 'Warszawa', 'Wrocław', 'Rzeszów', 'Gdańsk', 'Łódź', 'Szczecin', 'Białystok']
data.forEach(a => {
    if (unikalny.includes(a.NAZWA_1)) { } else {
        unikalny.push(a.NAZWA_1)
        if (a.NAZWA_2 != '') {
            ulice.push(a.NAZWA_1 + ' ' + a.NAZWA_2)
        } else {
            ulice.push(a.NAZWA_1)
        }
    }
})
/*const ulice = data.map((a, index) => {
    if (unikalny.includes(a.NAZWA_1)) { return false } else {
        unikalny.push(a.NAZWA_1)
        if (a.NAZWA_2 != '') {
            return (
                a.NAZWA_1 + ' ' + a.NAZWA_2
            )
        } else {
            return (
                a.NAZWA_1
            )
        }
    }
})*/
console.log(ulice)
console.log(miasta)


export const Mui_Autocomplete = (props) => {
    const [value, setValue] = React.useState(ulice[0]);
    const [open, open_change] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    //console.log(value);
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete value={value}
                onChange={(event, newValue) => {
                    open_change(false)
                    setValue(newValue);
                    props.parentCallback(newValue);
                    event.preventDefault();
                }}
                open={open}
                //inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    open_change(true)
                    console.log(open);
                    //console.log('aaa');
                }} options={ulice} renderInput={(ulica) => <TextField {...ulica || ulica.value} />} />
        </Stack>
    )
}

export const Mui_Autocomplete_Miasta = (props) => {
    const [value2, setValue2] = React.useState(miasta[0]);
    const [open2, open_change2] = React.useState(false);
    const [inputValue2, setInputValue2] = React.useState('');
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete value={value2}
                onChange={(event, newValue2) => {
                    open_change2(false)
                    setValue2(newValue2);
                    props.parentCallback(newValue2);
                    event.preventDefault();
                }}
                open={open2}
                //inputValue={inputValue2}
                onInputChange={(event, newInputValue) => {
                    setInputValue2(newInputValue);
                    open_change2(true)
                    console.log(open2);
                    //console.log('bbb');
                }}
                options={miasta} renderInput={(miasta) => <TextField {...miasta || miasta.value} />} />
        </Stack>
    )
}