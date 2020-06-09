console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){

    const dogDiv = document.querySelector("#dog-image-container")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function getCeos() {
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(images => dogImages(images))
    }

    function dogImages(images) {
        
        images.message.forEach(string => {
            const newImg = document.createElement('img')
            newImg.src = string

        dogDiv.appendChild(newImg)
        });
    }

    function getbreeds() {
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => renderBreeds(breeds.message))
    }

    function renderBreeds(breeds) {

        breedList = Object.keys(breeds)
        breedList.forEach(breed => {
            const breedUl = document.querySelector("#dog-breeds")
            const breedLi = document.createElement('li')
            breedLi.innerText = breed
            breedUl.append(breedLi)
        });
        
    }

    getCeos()
    getbreeds()
})