//STONE GOD - First API FETCH
fetch('https://pokeapi.co/api/v2/pokemon/raichu')
//Customized error message
    .then(response => {
        if(!response.ok){
            throw new Error("No El-shaddai, resource not found")
        }
     return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error)); 

    

    async function fetchData() {

        try{
            const searchPokemon = document.getElementById('searchPokemon').value.toLowerCase();
             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);

             if(!response.ok){
            throw new Error("Can't find such a resource");
           }  
          const data = await response.json();
         console.log(data);A
            }
            catch(error){
                console.error(error);
            }
        
    } fetchData();