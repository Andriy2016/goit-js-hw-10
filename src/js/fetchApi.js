const API_KEY = 'live_3rpw0p2bq7cyMRIB802NWTTKdq5z2oAXeA2uP0ym1T8snloQNk2eB9S9b7dAcMPA';

export const allCatsArray = fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });

export const fetchCatByBreed = (breedId) => {
       return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        });
}

    

    
