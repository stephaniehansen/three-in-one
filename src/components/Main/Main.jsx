import React from 'react';
import { Link } from "@reach/router";

const Main = ({ weather }) => {
  return (
    <>
      <Link to="/weather">
        <h2>Weather</h2>
      </Link>
      <Link to="/quiz">
        <h2>One Question Quiz</h2>
      </Link>
      <Link to="/team-organiser">
        <h2>Football Team Organiser</h2>
      </Link>
    </>
  )
}

export default Main;
