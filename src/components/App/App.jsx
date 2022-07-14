import axios from 'axios';
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  useEffect(()=>{
    getForecast();
  }, []);

  // solo proj structure:
  // 1. on page load, send area_id to saga (may need to do async in useEffect)
  // 2. in saga: 
      //yield get office, grids from 'areas' table in db using area_id
      //yield get forecast from api using above data in url
      //yield store response in forecast reducer
  // 3. access reducer's data from component and display on DOM

  // in the project, this data will come from the 'areas' table in db
  const areaParams = {
    office: 'DLH',
    gridX: 121,
    gridY: 99
  };

  //GET weather forecast from gridpoints
  const getForecast=()=>{
    axios.get(`https://api.weather.gov/gridpoints/${areaParams.office}/${areaParams.gridX},${areaParams.gridY}/forecast`)
    .then((response)=>{
      console.log('back from forecast:', response.data);
      //then figure out how to display on DOM...
  
    }).catch((err)=>{
      console.log(err);
      alert('error getting forecast');
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dorian React Intro</h1>
        </header>
        <div>
          <p>
            body text
          </p>
        </div>
      </div>
    );
}

export default App;
