console.log('%c HI', 'color: firebrick')

let breeds = [];

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

function dogBreed(){
    const breedURL = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedURL)
    .then(response => response.json())
    .then(results =>{
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
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

// * choose letter
// * eventlistener
// * list breeds with that letter only

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreeds(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreeds(event.target.value);
    });
  }
