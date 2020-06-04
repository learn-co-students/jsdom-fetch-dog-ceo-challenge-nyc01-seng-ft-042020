console.log('%c HI', 'color: firebrick')
const imgAPI = "https://dog.ceo/api/breeds/image/random/4"

// Challenge 1

// document.addEventListener('DOMContentLoaded', (e) => {
//     fetch(imgAPI)
//     .then(response => response.json())
//     .then(json => renderImages(json.message))
// })

// function renderImages(array) {
//     array.forEach(imageURL => {
//         const container = document.getElementById('dog-image-container')
//         const image = document.createElement('img')
//         image.src = imageURL
//         container.appendChild(image)
//     })
// }

// Challenge 2

function addBreed(array){
    for (const breed in array) {
        if (array[breed].length > 0) {
            array[breed].forEach(subBreed => {
                const breedLI = document.createElement('li')
                breedLI.textContent = subBreed + " " + breed
                breedLI.id = breedLI.textContent[0]
                addToUL(breedLI)
                // Challenge 3
                addTextColorListener(breedLI)
            });
        } else {
            const breedLI = document.createElement('li')
            breedLI.textContent = breed
            breedLI.id = breedLI.textContent[0]
            addToUL(breedLI)
            // Challenge 3
            addTextColorListener(breedLI)
        }
    }    
}

function addToUL(element){
    const breedsUL = document.getElementById('dog-breeds')
    breedsUL.append(element)
}

// Challenge 3
function addTextColorListener(liElement){
    liElement.addEventListener('click', (e) => {
        e.target.style.color = "turquoise"
    })
}

// Challenge 4 - can dropdown once but need to refresh
function filterResults(dropdownElement){
    dropdownElement.addEventListener('change', function(e){
        match = e.target.value
        const allLIs = document.getElementsByTagName('li')
        const LIarray = [...allLIs]
        LIarray.forEach(liElement => {
            if (liElement.id !== match) {
                liElement.remove()
            }
        });
    })
}

let addContent = document.addEventListener('DOMContentLoaded', (e) => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreed(json.message))
    
    const dropdown = document.getElementById('breed-dropdown')
    filterResults(dropdown)
})