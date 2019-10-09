var x = document.body.clientHeight-5;
var y = document.body.clientWidth-5;

function place(){
randX = Math.ceil(Math.random()*x);
randY =  Math.ceil(Math.random()*y);

console.log(randX, randY);
// document.getElementById("test").style.top = (randX + "px");
// document.getElementById("test").style.left = (randY + "px");

var foto = document.createElement("IMG");    
foto.src = 'img/1.png';      
foto.style.top = (randY + "px");   
foto.style.left = (randX + "px");
           
document.body.appendChild(foto);   

console.log(counter);                   
};

