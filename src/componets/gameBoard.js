import React, { useState } from "react";
import styled from "styled-components";

import ChoicesContainer from "./choiceContainer";
import ScoreCounter from "./elements/scoreCounter";

const ScoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 4px solid white;
  border-radius: 10%;
  margin-top: 5%;
`;

const Container = styled.div`
  text-align: center;
`;
const WinnerText = styled.h1`
  color: white;
  text-transform: uppercase;
`;

function GameBoad(props) {
  const [state, setState] = useState({
    playerPoints: 0,
    oponentPoints: 0,
    wideChoices: true,
    winner: "",
  });
  const addPoint = (id, value, winner) => {
    setState((prevState) => ({
      ...prevState,
      [id]: value,
      winner: winner,
    }));
    changeView();
    setTimeout(() => {
      changeView();
    }, 3000);
  };

  const changeView = () => {
    setState((prevState) => ({
      ...prevState,
      wideChoices: !prevState.wideChoices,
    }));
  };

  const showWinner = (winner) => {
    let value = 0;
    console.log(winner);
    switch (winner) {
      case "oponent":
        value = state.oponentPoints + 1;
        addPoint("oponentPoints", value, winner);
        break;
      case "player":
        value = state.playerPoints + 1;
        addPoint("playerPoints", value, winner);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <ScoresContainer>
        <ScoreCounter points={state.playerPoints} onwer="player" />
        <ScoreCounter points={state.oponentPoints} onwer="oponent" />
      </ScoresContainer>
      {!state.wideChoices && <WinnerText>{state.winner}</WinnerText>}

      {state.wideChoices && <ChoicesContainer showWinner={showWinner} />}
    </Container>
  );
}

export default GameBoad;
