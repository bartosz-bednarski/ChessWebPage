const colors = ["blue","green", "red", "purple"];
const butClic = document.getElementById("butClic");
const color = document.querySelector(".color");
const cities = ['Ibiza', 'Palermo', 'Helsinki', 'Berlin'];
const cityClick = document.getElementById('cityClick');
const city = document.querySelector(".city");

console.log(document.getElementsByClassName("column center"));
butClic.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.getElementById('column.center').style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
return Math.floor(Math.random() * colors.length);
}

cityClick.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    city.textContent = cities [randomNumber];
});
