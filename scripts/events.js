/*const myFunction = event =>console.log(event.target)
document.querySelector("h1").onclick = myFunction;*/



const showContent = event => console.log(event.target.textContent)

document.querySelector(".porcupine") .onclick= showContent;



//const showName = event =>console.log(event.target.textName)


document.querySelector(".panther") .onclick = (event) => console.log(event.target.tagName)

//window.onclick = event =>console.log(event.target)

document.querySelector(".penguin") .onclick =(event) => console.log(event.target.textContent.toUpperCase())

//window.onclick = event => console.log(event.target.textContent.toUpperCase())

const sayHi = (name) => alert("Hi" + name);

//document.querySelector(".header") .addEventListener("click", () => sayHi("Rob"));

const pelicanLove =() => {
    for(let i=0;i < 3; i++) {
        console.log("i love pelicans!")
    }
}
document.querySelector (".pelican").addEventListener("click", pelicanLove)


const birdLove = animal => console.log(`${animal} is a pretty boy`);
document.querySelector(".parrot") .addEventListener("click", event => birdLove(event.target.textContent))
document.querySelector(".peacock") .addEventListener("click", event => birdLove(event.target.textContent))


const notAnteater = () => console.log("I am Not an anteater")
const notArmadillo = () => console.log("I am Not an armadillo")
// document.querySelector(".pangolin") .onclick = notAnteater;
// document.querySelector(".pangolin") .onclick = notArmadillo;

document.querySelector(".pangolin").addEventListener("click", notAnteater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo);

let x = document.querySelectorAll(".tab")
console.log(x)
let tabs= Array.from(x);
 
tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))


const bestAnimal = animal => 
    console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle ssassin` : `${animal} is the best`)
    
//     if(animal.toLowercase() === "panther"){
//         console.log(`${animal} is the jungel assassin`)
//     }else {
//     console.log(`${animal} is the best!`);
//     }
// }


let animalTabs = Array.from(document.querySelectorAll(".tab"));
animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)))
console.log(animalTabs)


document.querySelector("Footer p span").addEventListener("click", () => console.log("span"))

document.querySelector("Footer").addEventListener("click", () => console.log("Footer"),true)

document.querySelector("Footer p").addEventListener("click", () => console.log("paragraph"), true)


const setActive = (clickedTab) => {
    animalTabs.forEach(tab => tab.classList.contains("active"));
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent
}
animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

let animalContent = document.querySelectorAll(".content");

const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {

        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured")
        } else {
            contentDiv.classList.remove("featured")
        }
    })
}

animalTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
    console.log(tab.textContent.toLowerCase());
    findContent(tab.textContent.toLowerCase())
}));

animalTabs.forEach(tab => tab.addEventListener("mouseleave", () => 
    animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))

))


let searchInput = document.querySelector("#search");



const findTab = () => {
    animalTabs.forEach(tab => {
        if(tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add('active')
        } else {
            tab.classList.remove('active')
        }
        })

}

//document.querySelector("#search").addEventListener("input", () => console.log(document.querySelector("#search").value))

searchInput.addEventListener("change",findTab)

//objects

let countries = ["Australia", "Sweden", "Pakistan"]
countries.push("India")
console.log(countries)

/*let australia = {
    name:"Australia",
    capitalCity: "Canberra",
    language:"English",
    population: 250000000,
    sports: ["Cricket","Aussie Rules", "Tennis"]
}*/
// console.log(`There are ${australia.population} people are living in ${australia.name}`);

// //document.querySelector("h1").textContent = australia.sports[0]
 

// function Country(name,capitalcity,language,population,sports) {
//     this.name = name,
//     this.capitalcity = capitalcity,
//     this.language = language,
//     this.population = population,
//     this.sports = sports
//     this.description =() => console.log(`${this.name}'s capital is ${this.capitalCity}`)
// }

// let sweden = new Country("sweden","Stockholm","Svenska",100000,["Hockey","Brandboll","Bandy"]);
// let Pakistan = new Country("Pakistan","Islamabad","urdu",24100000,["Cricket","Hockey"]);

// console.log(sweden.capitalCity)
// console.log(Pakistan.language)


// let countries1= [sweden,india,australia];

// countries.forEach(country  => country.description())

