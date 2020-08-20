import React from 'react';
import { Link } from "@reach/router";
import { Card } from '@material-ui/core';

import weather from "../../assets/weather-img.jpeg";
import quiz from "../../assets/quiz-img.jpg";
import football from "../../assets/football-team.jpg";

import styles from "./Main.module.scss"

const Main = () => {
  return (
    <section className={styles.main}>
      <h1>Welcome</h1>
      <div className={styles.mainContainer}>
        <Card className={styles.mainCard} variant="outlined">
          <Link to="/weather">
            <img src={weather} alt="Weather" />
            <div className={styles.cardContent}>
              <h2>Weather</h2>
              <p>Displays current weather information for London, Bristol and Rome.</p>
            </div>
          </Link>
        </Card>
        <Card className={styles.mainCard} variant="outlined">
          <Link to="/quiz">
            <img src={quiz} alt="One Question Quiz" />
            <div className={styles.cardContent}>
              <h2>One Question Quiz</h2>
              <p>See if you can correctly answer the most difficult quiz in the world.</p>
            </div>        
          </Link>
        </Card>
        <Card className={styles.mainCard} variant="outlined">
          <Link to="/team-organiser">
          <img src={football} alt="Football" />
            <div className={styles.cardContent}>
              <h2>Team Organiser</h2>
              <p>Create a team of your ideal Borussia Mönchengladbach starting eleven.</p>
            </div>
          </Link>
        </Card>
      </div>
    </section>
  )
}

export default Main;
