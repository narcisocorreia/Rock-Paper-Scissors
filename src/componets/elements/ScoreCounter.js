import React from "react";
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
  return (
    <Container>
      <Points>{props.points}</Points>
      <Onwer>{props.onwer}</Onwer>
    </Container>
  );
}

export default ScoreCounter;
