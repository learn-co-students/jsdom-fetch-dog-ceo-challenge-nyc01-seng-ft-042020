console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ul = document.querySelector("#dog-breeds")
const dogImageContainer = document.querySelector("#dog-image-container")

function fetchImages(imgUrl) {
    fetch(imgUrl)
    .then( res => res.json() )
    .then(json => renderImages(json.message) )
}

function renderImages(object) {
    object.forEach(url => renderImage(url));
}

function renderImage(url) {
    img = document.createElement("img")
    img.src = url
    dogImageContainer.appendChild(img)
}

function fetchBreeds(breedUrl) {
    fetch(breedUrl)
    .then( res => res.json() )
    .then ( json => {
        breeds = Object.keys(json.message)
        renderBreeds(breeds) })
    
    addBreedSelectListener();
}

function renderBreeds(breeds) {
    removeChildren(ul)

    breeds.forEach(breed => addBreed(breed))
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child)
        child = element.lastElementChild;
    }
}

function addBreed(breed) {
    dogLi = document.createElement("li")
    dogLi.className = "dog-li"
    dogLi.id = breed
    dogLi.innerText = breed
    dogLi.dataset.color = "nada"
    ul.appendChild(dogLi)
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function(e) {
        selectBreedsStartingWith(e.target.value)
    });
  }

function selectBreedsStartingWith(letter) {
    renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

document.addEventListener("click", function(e){
    if (e.target.className === "dog-li" && e.target.dataset.color === "nada") {
        console.log("Woof")
        e.target.style.color = "red"
        e.target.dataset.color = "red"
    }

    else if (e.target.className === "dog-li" && e.target.dataset.color === "red") {
        e.target.style.color = "black"
        e.target.dataset.color = "nada"
    }
})

fetchImages(imgUrl);
fetchBreeds(breedUrl);

})
