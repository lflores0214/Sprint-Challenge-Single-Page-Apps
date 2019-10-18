import React from "react";
import styled from "styled-components";

const Card = styled.div`
width:40%
height: auto;
margin: 2% 0 2% 25%;
border: 2px solid #203b56;
padding: 2%;
box-shadow: -1px 1px 3px 4px #8bc13e;
color: black;
border-radius: 5px;
background-color: #e67f3c;
text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <div>
      <Card>
        <h1>{props.character.name}</h1>
        <p>Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
      </Card>
    </div>
  );
}
