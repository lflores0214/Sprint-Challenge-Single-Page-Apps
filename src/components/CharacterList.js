import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: auto;
  background-color: rgba(126, 120, 99, 0.2);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 2%;
  margin: 2% 2% 0 5%;
  -webkit-box-shadow: -1px 1px 5px 9px #8bc13e;
  -moz-box-shadow: -1px 1px 5px 9px #8bc13e;
  box-shadow: -1px 1px 5px 9px #8bc13e;
  border-radius: 10px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        const characters = response.data.results;
        setCharacterData(characters);
        console.log(characters);
        console.log(response.data);
      });
  }, [page]);

  return (
    <section className="character-list">
      <Container>
        {characterData.map(character => {
          return (
            <CharacterCard
              character={character}
              id={characterData.id}
              name={character.name}
              status={character.status}
              species={character.species}
            />
          );
        })}
      </Container>
    </section>
  );
}
