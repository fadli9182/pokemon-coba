import React from "react";

const InfoPokemon = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Detail Pokemon
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`} alt="contoh gambar" />
                  <h3 style={{ textTransform: "capitalize" }}>{data.name}</h3>
                  <hr />
                  <div className="skill">
                    <h3>Ability</h3>
                    <h4>{data.types[0].type.name}</h4>
                    <h4>{data.types[1].type.name}</h4>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InfoPokemon;
