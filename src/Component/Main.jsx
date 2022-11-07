import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import pokeBg from "../pokeapi/pokeBg.png";
import InfoPokemon from "./InfoPokemon";

const Main = () => {
  const [poke, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

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
              <img className="img-fluid" src={pokeBg} alt="logo pokemon" width={"300px"} />
              <div className="input-group" style={{ justifyContent: "center", marginTop: "30px" }}>
                <div className="form-outline">
                  <input type="search" id="form1" className="form-control" />
                </div>
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
            <div className="row">
              <Card key={poke.id} pokemon={poke} loading={loading} infoPokemon={(poke) => setPokeDex(poke)} />
              {/* {filterpoke.map((coba) => (
                <div className=" col-md-3 col-sm-6 mb-3">
                  <div class="card text-start">
                    <img class="card-img-top" src="" alt="gambar pokemonnya" />
                    <div class="card-body">
                      <h4 class="card-title">{coba.name}</h4>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
            <div className="btn-group">
              {prevUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(prevUrl);
                  }}
                >
                  Previous
                </button>
              )}

              {nextUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(nextUrl);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </main>
        </div>
        <InfoPokemon data={pokeDex} />
      </div>
    </>
  );
};

export default Main;
