export async function fetchApi() {
  let arrayPokemones = [];

  for (let i = 1; i < 100; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const petition = await fetch(url);
    const result = await petition.json();
    console.log(result);
    arrayPokemones.push(result);
  }

  const pokemonesMapeados = arrayPokemones.map((pokemon) => {
    return {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
    };
  });

  return pokemonesMapeados;
}
