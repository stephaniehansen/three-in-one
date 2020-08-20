import React, { useState, useEffect } from 'react';
import styles from "./PlayerList.module.scss";
import team from "../../data/team";

import PlayerCard from "../PlayerCard";

const PlayerList = ({ players }) => {
  const [selectedPlayers, setSelectedPlayers] = useState(team);

  const getPlayers = (position) => {
    return players.filter(player => player.position === position)
    .map(player => 
      <PlayerCard key={player.id} player={player} handleChecked={handleChecked} isFull={checkFull(position)} />)
  }

  const checkFull = (position) => {
    const limit = { "Defender": 3, "Midfielder": 4, "Attacker": 3, "Goalkeeper": 1 }
    return Object.keys(selectedPlayers[position]).length >= limit[position] ? true : false
  }

  const handleChecked = (e, position) => {
    const playerName = e.target.value;
    setSelectedPlayers({
      ...selectedPlayers,
      [position]:  e.target.checked ? [...selectedPlayers[position], {name: playerName}] : selectedPlayers[position].filter(player => player.name !== playerName)
    });
  }
  
  return (
    <section className={styles.playerList}>
      <h1>Football Team Organiser</h1>
      <div className={styles.playersContainer}>
        <article>
          <h2>Defenders</h2>
          {getPlayers("Defender")}
        </article>
        <article>
          <h2>Midfielders</h2>
          {getPlayers("Midfielder")}
        </article>
        <article>
          <h2>Attackers</h2>
          {getPlayers("Attacker")}
        </article>
        <article>
          <h2>Goalkeepers</h2>
          {getPlayers("Goalkeeper")}
        </article>
      </div>
    </section>
  )
}

export default PlayerList;
