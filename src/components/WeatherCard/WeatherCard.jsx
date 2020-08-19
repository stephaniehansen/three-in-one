import React from 'react';
import styles from "./WeatherCard.module.scss";

const WeatherCard = ({ city }) => {
  return (
    <>
      <h2>{city.name}</h2>
      <p>Temperature: {city.main.temp.toFixed()}</p>
      <p>Humidity: {city.main.humidity}</p>
      <p>Current Min Temperature: {city.main.temp_max.toFixed()}</p>
      <p>Current Max Temperature: {city.main.temp_min.toFixed()}</p>
    </>
  )
}

export default WeatherCard;
