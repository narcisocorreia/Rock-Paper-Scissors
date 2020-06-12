import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 70px;
`;

const Points = styled.h1`
  font-size: 3.5em;
`;
const Onwer = styled.h2`
  text-transform: uppercase;
  margin-top: -20px;
`;

function ScoreCounter(props) {

  useEffect(() => {
    if (props.points > 0) {
      const node = document.getElementById(`${props.onwer}Points`);
      node.classList.add("animate__animated", "animate__bounce");

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd() {
        node.classList.remove("animate__animated", "animate__bounce");
      }
      node.addEventListener("animationend", handleAnimationEnd);
    }
  }, [props.onwer, props.points]);

  return (
    <Container>
      <Points id={`${props.onwer}Points`}>{props.points}</Points>
      <Onwer>{props.onwer}</Onwer>
    </Container>
  );
}

export default ScoreCounter;
