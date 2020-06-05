import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Choice from "./elements/handButton";

import rock from "./imgs/rock.png";
import paper from "./imgs/paper.png";
import scissors from "./imgs/scissors.png";

const Container = styled.div`
  margin-top: 10%;
  display: flex;
`;

function ChoiceContainer(props) {
  const [state, setState] = useState({
    playerChoise: "",
    pcChoice: "",
    unSelected: true,
  });

  const handleChange = (value) => {
    if (state.unSelected) {
      setState({
        playerChoise: value,
        pcChoice: SelectPChoice(),
        unSelected: false,
      });
    }
  };

  const SelectPChoice = () => {
    let number = Math.floor(Math.random() * 3);
    let choice = "";
    switch (number) {
      case 1:
        choice = "paper";
        break;
      case 2:
        choice = "scissors";
        break;
      default:
        choice = "rock";
        break;
    }
    return choice;
  };

  useEffect(() => {
    const FindWinner = () => {
      if (
        state.pcChoice !== "" &&
        state.pcChoice !== "" &&
        state.unSelected === false
      ) {
        let result = `${state.playerChoise}-${state.pcChoice}`;
        switch (result) {
          case "rock-scissors":
            props.showWinner("player");
            break;
          case "scissors-paper":
            props.showWinner("player");
            break;
          case "paper-rock":
            props.showWinner("player");
            break;
          case "scissors-rock":
            props.showWinner("pc");
            break;
          case "paper-scissors":
            props.showWinner("pc");
            break;
          case "rock-paper":
            props.showWinner("pc");
            break;
          default:
            props.showWinner("draw");
            break;
        }

        setState({
          playerChoise: "",
          pcChoice: "",
          unSelected: true,
        });
      }
    };
    FindWinner();
  }, [state]);

  return (
    <Container>
      <Choice
        background={rock}
        id="playerChoise"
        value="rock"
        onClick={handleChange}
      />
      <Choice
        background={paper}
        id="playerChoise"
        value="paper"
        onClick={handleChange}
      />
      <Choice
        background={scissors}
        id="playerChoise"
        value="scissors"
        onClick={handleChange}
      />
    </Container>
  );
}

export default ChoiceContainer;
