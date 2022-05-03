import React, { useState, useEffect } from "react";
import "./_Pokemones.scss";

export const Pokemones = ({ pokemonesFetch }) => {
  console.log(pokemonesFetch);
  return (
    <>
      {pokemonesFetch.map((pokemon) => {
        return (
          <>
            <div className="pokemon_div">
              <h1>{pokemon.name}</h1>
              <img
                className="pokemon_div_img imagen"
                src={pokemon.image}
                alt={pokemon.name}
              />
              <div className="pokemon_div_text"></div>
            </div>
          </>
        );
      })}
    </>
  );
};
