import React from "react";
import "../../pokemon.css";

function PokemonList({ pokemons, selectPokemon }) {
  const drawPokemon = () => {
    return pokemons.map((p, id) => (
      <div className="card" style={{ borderRadius: "20px" }}>
        <div className="card-body">
          <div className="text-center">
            <p
              key={id}
              onClick={() => selectPokemon(p.id)}
              className={p.selected}
            >
              <img src={p.sprites.front_default} alt="" href="" />
              <p className="text-center">{p.name}</p>
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return <ul className="list-group">{pokemons.length > 0 && drawPokemon()}</ul>;
}

export default PokemonList;
