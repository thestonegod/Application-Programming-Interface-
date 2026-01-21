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
          const pokemonImage = data.sprites.front_default;
          const ImgElement = document.getElementById('pokemonImage');

          ImgElement.src = pokemonImage;
          ImgElement.style.display = 'block';

            }
            catch(error){
                console.error(error);
            }
        
    } 

    //Pass the API into the function. It takes a request object {} and returns a response {}. JS sets default values when you don't pass any values.
    //Fetch() is asynchronous and returns a promise that resolves to the Response object representing the response to the request.
    //{Response object}
    const url = 'https://worldtimeapi.org/api/timezone/Africa/Cairo';
    async function getTime() {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)  
    }
    getTime();

    //
    const urlMusic = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE8';
    async function getMusic() {
        const request = new Request(urlMusic, {
            headers: {
                "Authorization": 'Bearer'
            }
        });

        const response = await fetch(request)
        const data = await response.json()
        console.log(data)  
    }
    getMusic();