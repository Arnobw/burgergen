// var x = document.body.clientHeight-5;
// var y = document.body.clientWidth-5;

burgername=[];
var x = 500;
var y = 500;
function place(){
randX = Math.ceil(Math.random()*x);
randY =  Math.ceil(Math.random()*y);

console.log(randX, randY);
// document.getElementById("test").style.top = (randX + "px");
// document.getElementById("test").style.left = (randY + "px");

var foto = document.createElement("IMG");    
var counter = 0;

ingredients = ['top bun', 'beef', 'tomatoes', 'lettuce', 'pickles', 'cheese', 'bun'];


randomfoto = ingredients[Math.floor(Math.random()*ingredients.length)];

burgername.push(randomfoto);
console.log(burgername);
counter++;
foto.style.zIndex = counter;
foto.src = 'img/' + randomfoto + '.png';      

foto.style.top = (randY + "px");   
foto.style.left = (randX + "px");
document.getElementById('plate').appendChild(foto);         

console.log(counter);
fullName =burgername.join("-");
document.getElementById('name').innerHTML = fullName + " Burger";

  
}
              


function generate() {
    aantal = Math.floor(Math.random()*11);

    for(i=0;i<=aantal;i++){
        place();
    }
}

generate();

document.getElementById('plate').addEventListener('click', generate());




