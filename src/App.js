/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import GameMenu from './components/GameMenu';
import socket from './socketConfig';

function App() {
  useEffect(() => {
    socket.on('test', (msg) => {
      console.log(msg);
    });
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={GameMenu} />
      </Switch>
    </Router>
  );
}

export default App;
