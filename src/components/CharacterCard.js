import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
  const [character, setCharacter] = useState();
  const [id, setID] = useState(1);
  useEffect(() => {
    console.log("this is id", id);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
        setID(response.data.id);
        console.log("this is character", response.data.id);
      });
  }, [id]);
  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavLink to={`/character/${props.id}`}>
        <Card>
          <h1>{props.name}</h1>
          <p>{props.id}</p>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
        </Card>
      </NavLink>
    </div>
  );
}
