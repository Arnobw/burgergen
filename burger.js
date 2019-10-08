var x = document.body.clientHeight-5;
var y = document.body.clientWidth-5;



randX = Math.ceil(Math.random()*x);
randY =  Math.ceil(Math.random()*y);

console.log(randX, randY);
document.getElementById("test").style.top = (randX + "px");
document.getElementById("test").style.left = (randY + "px");