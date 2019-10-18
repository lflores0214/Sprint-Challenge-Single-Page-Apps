import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import Welcome from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <div>
      <Header />
      <Route 
      exact
      path="/" 
      render={()=> <Welcome />} />
      <CharacterList />
      <Route path="/character/:id" 
      render={()=>(
        <CharacterCard />
      )} />
    </div>
  );
}