import React, { useState } from "react";

function Card(props) {
  return (
    <>
      <div className=" col-md-3 col-sm-6 mb-3">
        <div class="card text-start">
          <img class="card-img-top" src={props.image} alt="gambar pokemonnya" />
          <div class="card-body">
            <h4 class="card-title">{props.nama}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
