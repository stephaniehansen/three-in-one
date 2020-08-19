import React from 'react';
import styles from "./PlayerList.module.scss";

import PlayerCard from "../PlayerCard";

const PlayerList = ({ players }) => {
  const getPlayers = (position) => {
    return players.filter(player => player.position === position)
    .map(player => <PlayerCard key={player.id} player={player} />)
  }

  return (
    <section className={styles.playerList}>
      <h1>Football Team Organiser</h1>
      <div className={styles.playersContainer}>
        <div>
          <h2>Defenders</h2>
          {getPlayers("Defender")}
        </div>
        <div>
          <h2>Midfielders</h2>
          {getPlayers("Midfielder")}
        </div>
        <div>
          <h2>Attackers</h2>
          {getPlayers("Attacker")}
        </div>
        <div>
          <h2>Goalkeepers</h2>
          {getPlayers("Goalkeeper")}
        </div>
      </div>
    </section>
  )
}

export default PlayerList;
