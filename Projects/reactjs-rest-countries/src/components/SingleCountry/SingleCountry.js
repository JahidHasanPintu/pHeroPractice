import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    console.log(props.country);
    const {area,region,population,name}=props.country;
    return (
        <div className='country'>
           
            <h2>Country Name: {name.common} </h2>
            <img src={props.country.flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <h4>Area: {area} </h4>

        </div>
    );
};

export default SingleCountry;