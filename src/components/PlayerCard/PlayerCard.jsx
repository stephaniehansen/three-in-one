import React, { useState } from 'react';
import styles from "./PlayerCard.module.scss";

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
          <Avatar
            src={`https://d2mt4yaynhqpf8.cloudfront.net/player/lars-stindl-borussia-moenchengladbach-dfl-sea-0001k3-500x500.png`}
          />
        </ListItemAvatar>
        <ListItemText>{player.name}</ListItemText>
        <ListItemSecondaryAction>
        <Checkbox 
          value={player.name} 
          onClick={(e) => toggleCheckbox(e)} 
          disabled={!isChecked && isFull} 
        />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}

export default PlayerCard;
