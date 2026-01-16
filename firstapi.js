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

    fetData();

    async function fetData() {

        try{
             const response = await fetch('https://pokeapi.co/api/v2/pokemon/typhlosion');

             if(!response.ok){
            throw new Error("Can't find such a resource");
        }
        
        }
        catch(error){
            console.error(error);
        }
        
    }