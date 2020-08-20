import React from 'react';
import { Card } from '@material-ui/core';

import styles from "./WeatherCard.module.scss";

const WeatherCard = ({ city }) => {
  return (
    <Card className={styles.weatherCard} variant="outlined">
      <h2>{city.name}</h2>
      <div className={styles.cardContent}>
        <p>Temperature: {city.main.temp.toFixed()}&deg;</p>
        <p>Humidity: {city.main.humidity}%</p>
        <p>Current Min Temperature: {city.main.temp_max.toFixed()}&deg;</p>
        <p>Current Max Temperature: {city.main.temp_min.toFixed()}&deg;</p>
      </div>
    </Card>
  )
}

export default WeatherCard;
