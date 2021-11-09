import React from "react";

function PokemonDetail({ pokemon }) {
  const getTypeStyle = (type) => {
    let backgroundColor = "#000";
    return { backgroundColor, color: "#FFF", margin: "5px" };
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="text-center">{pokemon.name}</h3>
        <div className="text-center">
          <img src={pokemon.sprites["front_default"]} alt="" href="" />
        </div>
        <div className="pokemon-box-details">
          <ul className="list-group list-group-horizontal justify-content-center">
            {pokemon.types.length > 0 &&
              pokemon.types.map((t, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex pokemon-list-details"
                  style={getTypeStyle(t.type.name)}
                >
                  {t.type.name}
                </li>
              ))}
          </ul>
        </div>
        <p className="text-center">ID: {pokemon.id}</p>
        <p className="text-center">Weight: {pokemon.weight}</p>
        <p className="text-center">Height: {pokemon.height}</p>
        <p className="text-center">
          Base experience: {pokemon.base_experience}
        </p>

        <div className="text-center">
          <button className="text-center">catch</button>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
