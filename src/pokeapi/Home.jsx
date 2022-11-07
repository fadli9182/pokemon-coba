import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const Home = () => {
  const [biji, setBiji] = React.useState([]);

  React.useEffect(() => {
    function getPoke() {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
        .then((res) => res.json())
        .then((allpoke) => setBiji(allpoke.results));
    }
    getPoke();
    function fetchPokeData(pokemon) {
      let url = "https://pokeapi.co/api/v2/pokemon/1";
      fetch(url)
        .then((res) => res.json())
        .then(function (pokeData) {
          console.log(pokeData);
        });
    }
    fetchPokeData();
  }, []);

  const filterpoke = biji.filter((pokee) => pokee.name);

  // state = {
  //   results: [],
  //   dataResult: {
  //     name: "",
  //     url: "",
  //   },
  // };

  // getData = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20").then((res) => {
  //     this.setState(
  //       {
  //         results: res.data,
  //       },
  //       () => console.log(res.data.results)
  //     );
  //   });
  // };

  // componentDidMount = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
  //     this.setState(
  //       {
  //         results: res.data,
  //       },
  //       console.log()
  //     );
  //   });
  //   this.getData();
  // };

  // const [allPokemons, setAllPokemons] = useState([]);
  // const [loadPoke, setLoadPoke] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  // const getAllPokemons = () => {
  //   const res = fetch(loadPoke);
  //   const data = res.json();
  //   setLoadPoke(data.next);
  //   function createPokemonObject(result) {
  //     result.forEach((pokemon) => {
  //       const res = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
  //       const data = res.json();
  //       setAllPokemons((currentList) => [...currentList, data]);
  //     });
  //   }
  //   createPokemonObject(data.results);
  //   console.log(allPokemons);
  // };
  // useEffect(() => {
  //   getAllPokemons();
  // });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-block text-light sidebar collapse" style={{ backgroundColor: "orange" }}>
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <h1>Kategori</h1>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ backgroundColor: "black" }}>
            <div className="d-flex justify-content-center flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <img className="img-fluid" src="" alt="logo pokemon" width={"300px"} />
              <div className="input-group" style={{ justifyContent: "center", marginTop: "30px" }}>
                <div className="form-outline">
                  <input type="search" id="form1" className="form-control" />
                </div>
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
            <div className="row">
              {filterpoke.map((coba) => (
                <div className=" col-md-3 col-sm-6 mb-3">
                  <div class="card text-start">
                    <img class="card-img-top" src="" alt="gambar pokemonnya" />
                    <div class="card-body">
                      <h4 class="card-title">{coba.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
