import fetchBreeds from "./cat-api"

const selectList = document.querySelector('.breed-select')
let breedList;

window.addEventListener("load", fetchBreeds)


