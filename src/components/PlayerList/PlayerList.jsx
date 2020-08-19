import React from 'react';
import styles from "./PlayerList.module.scss";

import PlayerCard from "../PlayerCard";

const PlayerList = ({ players }) => {

  const getPlayers = () => {
    return players.map(player => <PlayerCard key={player.id} player={player} />)
  }

  return (
    <>
      <h1>Football Team Organiser</h1>
      {getPlayers()}
    </>
  )
}

export default PlayerList;
