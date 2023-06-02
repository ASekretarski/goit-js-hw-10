import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds?api_key=live_rqK3oyd38AWXZJb7xjlK2r9gU43INARb6XZ8w0bUxgPsfIqDs3eCDfsHe3HiMbTT')
        .then(response => {
            console.log(`this is the response ${response}`)
            if (!response.ok) {
        Notify.failure(`Error status ${response.status}`)
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
      `https://api.thecatapi.com/v1/images/search??api_key=live_rqK3oyd38AWXZJb7xjlK2r9gU43INARb6XZ8w0bUxgPsfIqDs3eCDfsHe3HiMbTT&breed_ids=${breedId}`)
      .then(response => {
    if (!response.ok) {
        Notify.failure(`Error status ${response.status}`);
        errorDisplay()
    }
    return response.json();
  });
}