console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(e){
    getDogs();   
    dogBreed(); 

});

let getDogs = () => {
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogs => {
        dogs.message.forEach(dog => addImage(dog))
    });
};

function addImage(dogUrl){
    const imgContainer = document.querySelector('#dog-image-container');
    const dogImg = document.createElement('img');
    dogImg.src = dogUrl;
    imgContainer.appendChild(dogImg);
    // dogImg.style.height = '100px';
    // dogImg.style.width = '100px';
};

let dogBreed = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(results => {
        breeds = Object.keys(results.message)
        breeds.forEach(breed => addBreed(breed))
    });
};

function addBreed(breeds){
    const breedUl = document.querySelector('#dog-breeds');
    const breedName = document.createElement('li');
    breedName.innerText = breeds;
    breedUl.appendChild(breedName);
    breedName.addEventListener('click', function(e){
        breedName.style.color = 'red'
    });
};

