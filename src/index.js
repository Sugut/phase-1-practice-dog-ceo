console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds=[]
const ul = document.querySelector('#dog-breeds')

// fetch challenge 1
fetch(imgUrl)
.then(response => response.json())
.then(data =>data.message.forEach (dogImage=>renderImage(dogImage)));
  
// function renderImage
function renderImage(dogImage){
  const container = document.querySelector('#dog-image-container');
  const image = document.createElement("img")
  image.src= dogImage
  container.append(image)
}

// fetch challenge 2
fetch(breedUrl)
.then(response => response.json())
.then(data =>{
   breeds= Object.keys(data.message)
  renderBreeds(breeds)
})

// function renderBreeds
 function renderBreeds(breeds){
   breeds.forEach(breed => {
  const li = document.createElement("li")
  li.innerText= breed
  ul.append(li)
  li.addEventListener('click', changeColor)
   })  
   
 }

//  chalenge 3
 function changeColor(e){
  e.target.style.color ="blue"
 }

  
//  challenge 4
 const dropdown = document.getElementById("breed-dropdown")
 dropdown.addEventListener("change", handleChange)
 function handleChange(e){
   let letter= e.target.value
   let filteredBreeds = breeds.filter(breed=>breed.startsWith(letter))
   ul.innerHTML=" "
   renderBreeds(filteredBreeds);
   
 }
})