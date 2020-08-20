import React from 'react';
import { Router } from '@reach/router';

import Main from "../../components/Main";

const Routes = () => {
  return (
    <Router>
      <Main path="/" />
    </Router>
  );
}

export default Routes;
