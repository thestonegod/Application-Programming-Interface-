//STONE GOD - First API FETCH
fetch('https://pokeapi.co/api/v2/pokemon/raichu')
    .then(response => console.log(response))
    .catch(error => console.error(error)); 