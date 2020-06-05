import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ChoicesContainer from "./choiceContainer";
import ScoreCounter from "./elements/ScoreCounter";

const ScoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 4px solid white;
  border-radius: 10%;
  margin-top: 5%;
`;

const Container = styled.div``;

function GameBoad(props) {
  const [state, setState] = useState({
    playerPoints: 0,
    pcPoints: 0,
  });
  const addPoint = (id, value) => {
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const showWinner = (winner) => {
    let value = 0;
    switch (winner) {
      case "pc":
        value = state.pcPoints + 1;
        addPoint("pcPoints", value);
        break;
      case "player":
        value = state.playerPoints + 1;
        addPoint("playerPoints", value);
        break;
      default:
        break;
    }
    console.log(winner);
  };

  return (
    <Container>
      <ScoresContainer>
        <ScoreCounter points={state.playerPoints} onwer="player" />
        <ScoreCounter points={state.pcPoints} onwer="pc" />
      </ScoresContainer>
      <ChoicesContainer showWinner={showWinner} />
    </Container>
  );
}

export default GameBoad;
