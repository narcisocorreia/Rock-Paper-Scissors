import React from "react";
import styled from "styled-components";

const Title = styled.div`
  color: white;
  font-family: sans-serif;
  font-size: calc(10px + 2vmin);

  margin-top: 5%;
`;

function Header(props) {
  return (
    <header>
      <Title>Rock Paper Scissors</Title>
    </header>
  );
}

export default Header;
