import React, { useState, useEffect } from 'react';
import Routes from './containers/Routes';
import styles from "./App.module.scss";

const App = () => {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    fetch(`http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(weather =>  {
      setWeather(weather)
      setIsLoading(false);
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <div>{isLoading ? "Loading" : <Routes weather={weather} />}</div>
    </>
  );
}

export default App;
