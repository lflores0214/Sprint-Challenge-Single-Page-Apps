import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import Button from "./Button"

const Container = styled.div`
  width: 90%;
  height: auto;
  background-color: rgba(126, 120, 99, 0.2);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 2%;
  margin: 2% 2% 0 5%;
  -webkit-box-shadow: -1px 1px 5px 9px #8bc13e;
  -moz-box-shadow: -1px 1px 5px 9px #8bc13e;
  box-shadow: -1px 1px 5px 9px #8bc13e;
  border-radius: 10px;
`;
const Input = styled.input`
  margin-left:38%;
  width: 20%;
  text-align:center;
  :focus{
    background-color: #b1e63b;
  }
  
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  const [ search, setSearch ] = useState("")
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        const persons = response.data.results.filter(person => 
          person.name.toLowerCase().includes(search.toLocaleLowerCase())
          );
          console.log("rick and Morty chracters", response)
        setCharacterData(persons);
        
      })
      .catch(error => {
        console.log("error", error)
      })
  }, [page, search]);
  const handleInputChange= e => {
    setSearch(e.target.value)
  }

  return (
    <section className="character-list">
      <Container>
        <form>
          <Input 
          type="text"
          onChange={handleInputChange}
          value={search}
          name="name"
          placeholder="search by name"
          />
        </form>
        <Button 
        setPage={setPage}
        page={page}
        />
        {characterData.map(character => {
          return (
            <CharacterCard
              
              id={character.id}
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
