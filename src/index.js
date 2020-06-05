
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';


function fetcher(dataObj,funcToRun){
let data = fetch(dataObj)
.then(response => response.json())
.then(json => funcToRun(json));
}

fetcher(imgUrl,addImages);

function addImages(dataObj){
let arr = dataObj.message
arr.forEach(e=>{
let imgC = document.createElement('img');
    imgC.src = `${e}`;
   let dogDiv = document.querySelector("#dog-image-container");
   dogDiv.append(imgC);
});
}
 
function addBreeds(dataObj){
let arr = dataObj.message
let ulCollect = document.querySelector('#dog-breeds')
for(let key in arr){
  let li = document.createElement('li');
    li.className = 'dog-list';
    li.innerText = key;
    ulCollect.append(li);
}
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetcher(breedUrl,addBreeds);

let ulCollect = document.getElementById('dog-breeds');
document.addEventListener('click', (e)=>{
let element = e.target.className;
if (element === "dog-list"){
e.target.style.color = 'tomato';
}
});
