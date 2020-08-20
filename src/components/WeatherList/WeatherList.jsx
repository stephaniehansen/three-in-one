import React from 'react';
import styles from "./WeatherList.module.scss";

import WeatherCard from "../WeatherCard";

const WeatherList = ({ weather }) => {
  return (
    <>
      <h1>Weather</h1>
      {weather.list.map(city => <WeatherCard city={city} key={city.id} />)}
    </>
  )
}

export default WeatherList;