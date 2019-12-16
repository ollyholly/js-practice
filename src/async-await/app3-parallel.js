// SEQUENTIAL REQUESTS!
async function get3PokemonSequential() {
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}
