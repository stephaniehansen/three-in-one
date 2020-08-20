import React, { useState } from 'react';
import styles from "./PlayerCard.module.scss";

import placeholder from "../../assets/football-player.jpg";

import { 
  Checkbox, 
  ListItem, 
  ListItemSecondaryAction, 
  ListItemText, 
  ListItemAvatar, 
  Avatar } from '@material-ui/core';

const PlayerCard = ({ player, handleChecked, isFull }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = (e) => {
    setIsChecked(!isChecked);
    handleChecked(e, player.position);
  }

  return (
    <div className={styles.playerCard}>      
      <ListItem button>
        <ListItemAvatar>
          <Avatar src={placeholder} alt="Football Player" />
        </ListItemAvatar>
        <ListItemText>{player.name}</ListItemText>
        <ListItemSecondaryAction>
        <Checkbox 
          value={player.name} 
          onClick={(e) => toggleCheckbox(e)} 
          disabled={!isChecked && isFull} 
          color="primary"
        />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}

export default PlayerCard;
