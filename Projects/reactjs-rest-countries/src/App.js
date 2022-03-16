import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Country></Country>
      
      
      
      
      {/* <Header></Header>
      <Country></Country>
      <Person></Person> */}



    </div>
  );
}








//  Load Countries in a simple way 
// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1>Visiting every country of the world !! </h1>
//       <h3>Available Countries: {countries.length} </h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} region= {country.region} subregion={country.subregion} capital={country.capital}>  </Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name} </h2>
//       <h3>Capital: {props.capital} </h3>
//       <h4>Population: {props.population} </h4>
//       <h4>Region: {props.region} </h4>
//       <h4>Subregion: {props.subregion} </h4>


//     </div>
//   )
// }

export default App;
