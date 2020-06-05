import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: url(${(props) => props.background}) center center no-repeat
    transparent;
  border: 4px solid white;
  border-radius: 50%;
  height: 120px;
  width: 120px;

  color: white;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 15px;
`;

function handButton(props) {
  const onClick = () => {
    props.onClick(props.value);
  };
  return (
    <Button background={props.background} onClick={onClick}>
      {props.value}
    </Button>
  );
}

export default handButton;
