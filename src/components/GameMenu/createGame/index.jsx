import React, { useState } from 'react';
import {
  Container, Header, Form, Button,
} from 'semantic-ui-react';
import socket from '../../../socketConfig';

function CreateGame(props) {
  const [name, setName] = useState('');
  function handleChange(e) {
    setName(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(name);
    socket.emit('create-game', name);
  }
  return (
    <Container text textAlign="center">
      <Header as="h1">Create Game</Header>

      <Form onSubmit={onSubmit}>

        <Form.Input
          fluid
          label="Nickname"
          placeholder="Enter Nickname"
          name="nickname"
          type="text"
          onChange={handleChange}
          value={name}
        />

        <Button
          type="submit"
          content="Create Game"
          color="blue"
        />

      </Form>
    </Container>
  );
}

export default CreateGame;
