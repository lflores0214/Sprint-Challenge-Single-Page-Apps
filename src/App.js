import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import Welcome from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <div>
      <Header />
      <Route 
      exact
      path="/" 
      render={()=> <Welcome />} />
      <CharacterList />
      
      )} 
    </div>
  );
}