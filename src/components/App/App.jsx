import axios from 'axios';
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  useEffect(()=>{
    getForecast();
  }, []);

  // solo proj structure will be different:
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

  const [today, setToday] = useState('default');

  //GET weather forecast from gridpoints
  const getForecast=()=>{
    axios.get(`https://api.weather.gov/gridpoints/${areaParams.office}/${areaParams.gridX},${areaParams.gridY}/forecast`)
    .then((response)=>{
      console.log('back from forecast:', response.data);
      //then figure out how to display on DOM...
      console.log('forecasts for 14 periods', response.data.properties.periods);//an array of objects
      console.log('today forecast object', response.data.properties.periods[0]);
      setToday(response.data.properties.periods[0]);
      // console.log('today:', today);
      // console.log('today details', today.detailedForecast);
  
    }).catch((err)=>{
      console.log(err);
      alert('error getting forecast');
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather API Spike!</h1>
        </header>
        <div>
          <p>
           {today.detailedForecast}
          </p>
        </div>
      </div>
    );
}

export default App;
