import React, { useState } from "react";
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

  const animateComponet = (target, animation, callback) => {
    const node = document.getElementById(target);
    node.classList.add("animate__animated", animation);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove("animate__animated", animation);
      node.removeEventListener("animationend", handleAnimationEnd);

      if (typeof callback === "function") callback();
    }
    node.addEventListener("animationend", handleAnimationEnd);
  };

  const showResults = (id, value, winner) => {
    setState((prevState) => ({
      ...prevState,
      [id]: value,
      winner: winner,
    }));

    animateComponet("pointsContainer", "animate__fadeOutDown");

    setTimeout(() => {
      changeView();
    }, 1000);

    animateComponet("winnerText", "animate__fadeInUp", newRound());
  };

  const newRound = () => {
    setTimeout(() => {
      changeView();

      animateComponet("pointsContainer", "animate__fadeInUp");

      setState((prevState) => ({
        ...prevState,
        winner: "",
      }));
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
    switch (winner) {
      case "oponent":
        value = state.oponentPoints + 1;
        showResults("oponentPoints", value, winner);
        break;
      case "player":
        value = state.playerPoints + 1;
        showResults("playerPoints", value, winner);
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
      <WinnerText id="winnerText">{state.winner}</WinnerText>
      {state.wideChoices && <ChoicesContainer showWinner={showWinner} />}
    </Container>
  );
}

export default GameBoad;
