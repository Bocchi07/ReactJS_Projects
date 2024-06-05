import React from "react";
import "./Navigation.css";
import NavForm from "./NavForm";

const Navigation = () => {
  return (
    <header>
      <ul>
        <NavForm NavList="Home" />
        <NavForm NavList="Movies" />
        <NavForm NavList="TV Series" />
        <NavForm NavList="Most Popular" />
        <NavForm NavList="Top Airing" />
      </ul>
    </header>
  );
};

export default Navigation;
