import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import { getPokemonListData } from "../../api/PokemonService";

function HomeContainer() {
  useEffect(async () => {
    try {
      let pokemons = await getPokemonListData();
      console.log(pokemons);
      setFilteredPokeList(pokemons);
      setPokeList(pokemons);
    } catch (err) {
      alert("an error occurs");
      console.error(err);
    }
  }, []);

  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  const handleSelect = (pokemonId) => {
    setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]);
    setFilteredPokeList(
      filteredPokeList.map((p) =>
        p.id === pokemonId
          ? { ...p, selected: true }
          : { ...p, selected: false }
      )
    );
  };

  return (
    <div className="row pokemon-app-container">
      <div className="col-6 pokemon-list-container">
        <div style={{ height: "100%", overflowY: "auto" }}>
          <PokemonList
            pokemons={filteredPokeList}
            selectPokemon={handleSelect}
          />
        </div>
      </div>
      <div className="col-6">
        {pokemonSelected && <PokemonDetail pokemon={pokemonSelected} />}
      </div>
    </div>
  );
}

export default HomeContainer;
