import React from 'react';
import { Link } from "@reach/router";
import styles from "./NavBar.module.scss";

import { Container, AppBar, Toolbar, Button } from '@material-ui/core';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar className={styles.toolbar} disableGutters="true">
            <div className={styles.logo}>
              <Link to="/">
                <BubbleChartIcon fontSize="large"/>
              </Link>
            </div>
            <div>
              <Link to="/weather">
                <Button color="inherit">Weather</Button>
              </Link>
              <Link to="/quiz">
                <Button color="inherit">Quiz</Button>
              </Link>
              <Link to="/team-organiser">
                <Button color="inherit">Team Organiser</Button>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  )
}

export default NavBar;
