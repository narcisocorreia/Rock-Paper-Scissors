import React from "react";
import styled from "styled-components";

import Header from "./componets/headerComponent";
import GameBoard from "./componets/gameBoard";

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Header />
      <GameBoard />
    </Container>
  );
}

export default App;
