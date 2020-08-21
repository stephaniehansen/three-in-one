import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import styles from "./PlayerList.module.scss";
import players from "../../data/football-team";
import team from "../../data/team-structure";

import PlayerCard from "../PlayerCard";

const PlayerList = () => {
  const limit = { "Defender": 3, "Midfielder": 4, "Attacker": 3, "Goalkeeper": 1 }
  const [selectedPlayers, setSelectedPlayers] = useState(team);

  const getPlayers = (position) => {
    return players.filter(player => player.position === position)
    .map(player => 
      <PlayerCard key={player.id} player={player} handleChecked={handleChecked} isFull={checkFull(position)} />)
  }

  const checkFull = (position) => {
    return Object.keys(selectedPlayers[position]).length >= limit[position] ? true : false
  }

  const getRemaining = (position) => {
    const count = limit[position] - (selectedPlayers[position]).length;
    return count > 0 ? `Select ${count} ${position}s:` : `${position}s Full`;
  }

  const handleChecked = (e, position) => {
    const playerName = e.target.value;
    setSelectedPlayers({
      ...selectedPlayers,
      [position]:  e.target.checked ? 
        [...selectedPlayers[position], {name: playerName}] : 
        selectedPlayers[position].filter(player => player.name !== playerName)
    });
  }
  
  return (
    <section className={styles.playerList}>
      <h1>Football Team Organiser</h1>
      <div className={styles.playersContainer}>
        <Card className={styles.playerListCard} variant="outlined">
          <h2>Defenders</h2>
          <span className={styles.remainingTitle}>{getRemaining("Defender")} </span>
          {getPlayers("Defender")}
        </Card>
        <Card className={styles.playerListCard} variant="outlined">
          <h2>Midfielders</h2>
          <span className={styles.remainingTitle}>{getRemaining("Midfielder")} </span>
          {getPlayers("Midfielder")}
        </Card>
        <Card className={styles.playerListCard} variant="outlined">
          <h2>Attackers</h2>
          <span className={styles.remainingTitle}>{getRemaining("Attacker")} </span>
          {getPlayers("Attacker")}
        </Card>
        <Card className={styles.playerListCard} variant="outlined">
          <h2>Goalkeepers</h2>
          <span className={styles.remainingTitle}>{getRemaining("Goalkeeper")} </span>
          {getPlayers("Goalkeeper")}
        </Card>
      </div>
    </section>
  )
}

export default PlayerList;
