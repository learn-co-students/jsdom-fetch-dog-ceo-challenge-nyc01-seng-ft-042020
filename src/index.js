console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

document.addEventListener("DOMContentLoaded", function(e){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => json.message.forEach(element => {
        const dogCard = document.getElementById('dog-image-container')
        const dogImg = document.createElement('img')
        dogImg.src = element
        dogCard.appendChild(dogImg)

    }))

//on page load, fetch all the dog breeds using the url above ⬆️
//add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message)
        breeds.forEach(b => {
            const breedUl = document.getElementById('dog-breeds')
            const newBreed = document.createElement('li')
            newBreed.innerHTML = `${b}`
            breedUl.append(newBreed)
            newBreed.addEventListener('click', function(e){
                e.target.style.color = 'palevioletred';
            })
        })
    })

    function updateList(){
        const dropDownList = document.getElementById('breed-dropdown')
        dropDownList.addEventListener('change', function(e){
            breeds.forEach(breed => {
                if(breed.charAt(0) !== dropDownList.innerText) {
                    breeds.removeElement(breed)
                }
            })

        })
    }

    function removeElement(elementId) {
        // Removes an element from the document
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }
})




  


