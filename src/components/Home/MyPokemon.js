import React, { Component } from "react";

class MyPokemon extends Component {
  render() {
    return (
      <div className="row pokemon-app-container">
        <div className="col pokemon-list-container">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center"> test </h3>
              <div className="text-center">
                <img src="" alt="" href="" />
              </div>
              <div className="pokemon-box-details">
                <ul className="list-group list-group-horizontal justify-content-center">
                  test
                </ul>
              </div>
              <p className="text-center">ID: </p>
              <p className="text-center">Weight: </p>
              <p className="text-center">Height: </p>
              <p className="text-center">Base experience:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPokemon;
