console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', () => {
    const dogBreedUl = document.querySelector("#dog-breeds");


    function fetchBreed() {
        fetch(breedUrl)
        .then(response => response.json())
        .then(data => { 
            dataObj = data.message
            const breedArray = Object.keys(dataObj)
            breedArray.forEach(breed => {
                const newLi = document.createElement("li");
                newLi.innerText = `${breed}`
                dogBreedUl.appendChild(newLi)
                newLi.addEventListener('click', function(e){
                    newLi.style.color = 'red'
                })
            } 
            )
            
        })
    }

    function fetchImg() {
        fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
        const dogImageArray = data.message
        dogImageArray.forEach(imgUrl => {
        const dogImages = document.querySelector("#dog-image-container")
        const newImgTag = document.createElement("img")
        newImgTag.src = imgUrl
        dogImages.appendChild(newImgTag)
        });
        })
        }
    
        fetchImg() 
        fetchBreed()
        
        // .addEventListener("click", e => {
        //     e.style.color = "red";
        // })
    //    dogBreedLi.forEach(li => {
    //        li.innerText.addEventListener("click", function(e) {
    //             e.target.style.color = "red"

    //        })
           
    //    })
        // if (e.target.nodeName === "li") {
        //     console.log(e.target.nodeName)
            
        // }
    
});

