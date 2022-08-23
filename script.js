console.log("HELLURRRR")

const api_url = "https://catfact.ninja/breeds";

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    
}

getapi(api_url);