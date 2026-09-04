const API_KEY = 'XzA6oqALFxBHpWPxZhzaReQeabQJUCuG';


const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest.then((response)=>{
    console.log(`Response status: ${response.status}`);
}).catch((error)=>{
    console.warn(`Error: ${error}`);
});