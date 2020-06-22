import React, { useState } from 'react';
import {
  Container, Header, Form, Button,
} from 'semantic-ui-react';
import socket from '../../socketConfig';

function JoinGame() {
  const [userInput, setUserInput] = useState({ gameID: '', nickName: '' });
  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    socket.emit('join-game', userInput);
  }
  return (
    <Container text textAlign="center">
      <Header as="h1">Join Game</Header>

      <Form onSubmit={onSubmit}>
        <Form.Input
          fluid
          label="gameId"
          placeholder="Enter game ID"
          name="gameID"
          type="text"
          onChange={handleChange}
          value={userInput.gameID}
        />
        <Form.Input
          fluid
          label="Nickname"
          placeholder="Enter Nickname"
          name="nickName"
          type="text"
          onChange={handleChange}
          value={userInput.nickName}
        />

        <Button
          type="submit"
          content="Join Game"
          color="blue"
        />

      </Form>
    </Container>
  );
}

export default JoinGame;
