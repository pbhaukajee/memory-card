import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(function () {
    async function getPokeman() {
      const randomNumber = Math.floor(Math.random() * 20 + 1);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
      );
      const data = await res.json();
      setPokemon(data);
    }
    getPokeman();
  }, []);

  return (
    <div>
      <h1>Memory Card Game</h1>
      <div>
        <h3>Score:</h3>
        <h3>High Score:</h3>
      </div>
      <div className="container">
        {pokemon && (
          <div className="poky">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.species.name}
            />
            <p>{pokemon.species.name} </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
