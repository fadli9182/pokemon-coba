import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className=" col-md-3 col-sm-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => infoPokemon(item)}>
                <div className="card text-start">
                  <img className="card-img-top" src={item.sprites.other.home.front_default} alt="gambar pokemonnya" />
                  <div className="card-body">
                    <h2>{item.id}</h2>
                    <h4 style={{ textTransform: "capitalize" }} className="card-title">
                      {item.name}
                    </h4>
                    <h5 style={{ textTransform: "capitalize" }} className="card-title">
                      {item.types[0].type.name}
                    </h5>
                  </div>
                </div>
              </div>
              {/* <!-- Modal --> */}

              {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Detail Pokemon
                      </h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg`} alt="contoh gambar" />
                      <h3 style={{ textTransform: "capitalize" }}>saya</h3>
                      <h4>Jurus 1</h4>
                      <h4>Jurus 2</h4>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
