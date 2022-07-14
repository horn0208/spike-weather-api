import axios from 'axios';
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  useEffect(()=>{
    getForecast();
  }, []);

  //GET weather forecast from gridpoints
  const getForecast=()=>{
    axios.get('/weather/forecast').then((response)=>{
      console.log('back from forecast:', response.data);
  
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
