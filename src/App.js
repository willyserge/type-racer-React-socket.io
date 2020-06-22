/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import GameMenu from './components/GameMenu';
import socket from './socketConfig';
import CreateGame from './components/GameMenu/createGame';

function App() {
  const [gameState, setGameState] = useState({
    _id: '', isOpen: false, players: [], words: [],
  });

  useEffect(() => {
    socket.on('updateGame', (game) => {
      console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (gameState._id !== '') history.push(`/game/${gameState._id}`);
  }, [gameState._id]);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={GameMenu} />
        <Route path="/game/create" component={CreateGame} />
      </Switch>
    </Router>
  );
}

export default App;
