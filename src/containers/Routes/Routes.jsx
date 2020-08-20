import React from 'react';
import { Router } from '@reach/router';

import Main from "../../components/Main";
import WeatherList from "../../components/WeatherList";
import Quiz from "../../components/Quiz";
import PlayerList from "../../components/PlayerList";

const Routes = ({ weather }) => {
  return (
    <Router>
      <Main path="/" />
      <WeatherList path="/weather" weather={weather} />
      <Quiz path="/quiz" />
      <PlayerList path="/football" />
    </Router>
  );
}

export default Routes;
