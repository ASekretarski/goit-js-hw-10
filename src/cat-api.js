



function fetchBreeds() {
    fetch("https://api.thecatapi.com/v1/images/search?api_key=live_rqK3oyd38AWXZJb7xjlK2r9gU43INARb6XZ8w0bUxgPsfIqDs3eCDfsHe3HiMbTT&limit=5&has_breeds=1")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            const breedsData = [];
            for (position of data) {                
                const breedInfo = position.breeds[0]
                breedsData.push({
                    name: breedInfo.name,
                    id: breedInfo.id,
                    description: breedInfo.description
                })       
            }
            console.log(breedsData)
        })
        .catch(err => { console.log(err) })
}

fetchBreeds()