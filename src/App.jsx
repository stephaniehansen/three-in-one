import React, { useState } from 'react';
import styles from "./App.module.scss";
import weatherData from "./data/weather";

import WeatherList from "./components/WeatherList";

const App = () => {
  const [weather, setWeather] = useState(weatherData);

  return (
    <>
      <WeatherList weather={weather}/>
    </>
  );
}

export default App;
