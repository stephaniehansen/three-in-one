import React from 'react';
import { Router } from '@reach/router';

import Main from "../../components/Main";
import WeatherList from "../../components/WeatherList";
import Quiz from "../../components/Quiz";
import PlayerList from "../../components/PlayerList";

const Routes = ({ weather }) => {
  return (
    <Router primary={false}>
      <Main path="/" />
      <WeatherList path="/weather" weather={weather} />
      <Quiz path="/quiz" />
      <PlayerList path="/team-organiser" />
    </Router>
  );
}

export default Routes;
