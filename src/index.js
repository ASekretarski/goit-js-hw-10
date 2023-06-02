import { fetchBreeds, fetchCatByBreed, fetchByUniqueId } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const selectList = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

selectList.classList.add('invisible');
catInfo.classList.add('invisible');
errorMessage.classList.add('invisible')

fetchBreeds()
    .then((data) => {
        createBreedsList(data)
    })
    .catch((error) => {
    errorDisplay();
  });

function createDescription(event) {
    fetchCatByBreed(event.target.value)
    .then()
}


selectList.addEventListener('change', event => {
    loader.classList.remove('invisible');
    catInfo.classList.add('invisible');
    selectList.classList.add('invisible');
    fetchCatByBreed(event.target.value)
        .then(data => {getCatImage(data).catch(error => {
            errorDisplay();
        })
        .finally(() => {
            catInfo.classList.remove('invisible');
            selectList.classList.remove('invisible');
            loader.classList.add('invisible')
        });
    });
    
});

function createBreedsList(breeds) {
  const listOfBreeds = breeds
    .map(breed => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    }).join('');

    selectList.innerHTML = listOfBreeds;
    selectList.classList.remove('invisible')
    loader.classList.add('invisible')
}

function generateDescription(breedName, breedDescription, breedTemperament) {
    const breedDescriptionContent = [];
    const breedNameDisplay = document.createElement('h2');
    breedNameDisplay.textContent = breedName;
    const breedDescriptionDisplay = document.createElement('p');
    breedDescriptionDisplay.textContent = breedDescription;
    const breedTemperamentDisplay = document.createElement('p');
    breedTemperamentDisplay.textContent = breedTemperament;
    breedDescriptionContent.push(breedNameDisplay, breedDescriptionDisplay, breedTemperamentDisplay)
    catInfo.append(...breedDescriptionContent);
    
}

function getCatImage(data) {
  const catImage = data
    .map(data => {
      return `<img class="cat-image" src="${data.url}" width="500px">`;
    })
    .join('');
  catInfo.innerHTML = catImage;

  const descriptionCatId = data.map(data => {
    return data.id;
  });

  return fetch(`https://api.thecatapi.com/v1/images/${descriptionCatId}`)
    .then(response => {
        if (!response.ok) {
        Notify.failure(`Error status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        const breedName = data.breeds[0].name;
        const breedDescription = data.breeds[0].description;
        const breedTemperament = data.breeds[0].temperament;
        generateDescription(breedName, breedDescription, breedTemperament)
      return data;
    });
    
}

function errorDisplay() {
  catInfo.classList.add('invisible');
  selectList.classList.add('invisible');
}