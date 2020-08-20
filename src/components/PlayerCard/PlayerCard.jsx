import React, { useState } from 'react';
import styles from "./PlayerCard.module.scss";

const PlayerCard = ({ player, handleChecked, isFull }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = (e) => {
    setIsChecked(!isChecked);
    handleChecked(e, player.position);
  }

  return (
    <span>
      <label htmlFor={player.id}>{player.name}</label>
      <input type="checkbox" name={player.position} id={player.id} value={player.name} onClick={(e) => toggleCheckbox(e)} disabled={!isChecked && isFull}/>
    </span>
  )
}

export default PlayerCard;