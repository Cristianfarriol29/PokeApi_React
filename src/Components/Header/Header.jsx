import React, { useState, useEffect } from "react";
import { Logo } from "../Logo/Logo";
import { fetchApi } from "../../helpers/fetchApi";
import { Pokemones } from "../Pokemones/Pokemones";
import "./_Header.scss";
let cortados;
export const Header = () => {
  const [pokemones, setPokemones] = useState(["pikachu"]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApi().then((result) => setPokemones(result));
  }, []);

  const filteredPokemon = () => {
    if (search.length === 0) {
      cortados = pokemones.slice(currentPage, currentPage + 20);
      return cortados;
    }

    const filtrados = pokemones.filter((poke) => poke.name.includes(search));
    return filtrados;
  };

  const pokemonesFiltrados = filteredPokemon();

  const nextPage = (e) => {
    e.preventDefault();
    if (cortados.length >= 20) setCurrentPage(currentPage + 20);
  };

  const previousPage = (e) => {
    e.preventDefault();
    if (currentPage > 0) {
      setCurrentPage(currentPage - 20);
    }
  };

  const onSearchChange = (e) => {
    setCurrentPage(0);
    setSearch(e.target.value);
  };

  return (
    <header className="header_container">
      <div className="header_search_container">
        <Logo />
        <form>
          <div className="header_input">
            <h1>Busca a tu pokemon favorito</h1>
            <input
              type="text"
              placeholder="buscar pokemon"
              value={search}
              onChange={(e) => onSearchChange(e)}
            />
            <button onClick={previousPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
          </div>
        </form>
      </div>

      <div className="pokemon_section container">
        <div className="pokemon_cards">
          <Pokemones pokemonesFetch={pokemonesFiltrados} />
        </div>
      </div>
    </header>
  );
};
