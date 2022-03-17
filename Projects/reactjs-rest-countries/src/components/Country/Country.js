import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Country.css'

const Country = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div >
            <h2>Hello from Countries: {countries.length}</h2>
            <div className='countries-container'>
            {
                countries.map(country => <SingleCountry country={country}></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Country;