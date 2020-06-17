import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Button } from 'semantic-ui-react';

function GameMenu() {
  return (
    <Container text textAlign="center">
      <Header as="h1">Welcome to TypeRacer</Header>
      <Link to="/game/create">
        <Button
          content="Create game"
          primary
        />
      </Link>
      <Link to="/game/join">
        <Button
          content="Join game"
          basic
          color="blue"
        />
      </Link>

    </Container>
  );
}

export default GameMenu;
