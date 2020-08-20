import React from 'react';
import styles from "./WeatherList.module.scss";

import WeatherCard from "../WeatherCard";

const WeatherList = ({ weather }) => {
  return (
    <section className={styles.weatherList}>
      <h1>Weather</h1>
      <div className={styles.weatherListContainer}>
        {weather.list.map(city => <WeatherCard city={city} key={city.id} />)}
      </div>
    </section>
  )
}

export default WeatherList;
