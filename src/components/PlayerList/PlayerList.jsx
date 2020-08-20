import React, { useState, useEffect } from 'react';
import styles from "./PlayerList.module.scss";

import PlayerCard from "../PlayerCard";

const PlayerList = ({ players }) => {
  const team = {
    "Defender": [],
    "Midfielder": [],
    "Attacker": [],
    "Goalkeeper": []
  }
  const [selectedPlayers, setSelectedPlayers] = useState(team);

  const getPlayers = (position) => {
    return players.filter(player => player.position === position)
    .map(player => 
      <PlayerCard key={player.id} player={player} handleChecked={handleChecked} />)
  }

  const handleChecked = (player) => {
    setSelectedPlayers({
      ...selectedPlayers,
      [player.position]:  [...selectedPlayers[player.position], {name: player.name}]
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
      {console.log(selectedPlayers)}
    </section>
  )
}

export default PlayerList;
