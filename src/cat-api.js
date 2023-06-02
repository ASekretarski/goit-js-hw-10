const selectList = document.querySelector('.breed-select')

export default function fetchBreeds() {
    fetch("https://api.thecatapi.com/v1/breeds?api_key=live_rqK3oyd38AWXZJb7xjlK2r9gU43INARb6XZ8w0bUxgPsfIqDs3eCDfsHe3HiMbTT")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            const breedList = data;
            const breedListOptions = [];
            for (breed of breedList) {
                const breedListItem = document.createElement('option');
                breedListItem.value = breed.id;
                breedListItem.textContent = breed.name;
                breedListOptions.push(breedListItem)
                
            }
            selectList.append(...breedListOptions)
        })
        .catch(err => {
            console.log(err)
        })
}

