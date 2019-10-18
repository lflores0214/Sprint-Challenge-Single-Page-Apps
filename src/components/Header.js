import React from "react";
import { Route, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <h1>Welcome to the ultimate fan site!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/character">Characters</NavLink>
      </nav>
      
    </header>
  );
}
