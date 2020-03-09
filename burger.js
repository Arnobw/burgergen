plate = document.getElementById('plate');
name = document.getElementById('name');
var counter = 800;
burgername = [];
var x = 500;
var y = 250;
ingredients = ['top bun', 'beef', 'tomatoes', 'lettuce', 'pickles', 'cheese', 'bun', 'onions', 'chicken', 'chili sauce', 'bacon'];



// function place() {
//     counter--;
//     randX = Math.ceil(Math.random() * x);
//     randY = Math.ceil(Math.random() * y);

//     console.log(randX, randY);

//     var foto = document.createElement("IMG");

//     randomfoto = ingredients[Math.floor(Math.random() * ingredients.length)];

//     burgername.push(randomfoto);
//     console.log(burgername);

//     console.log(counter);

//     foto.style.zIndex = counter;
//     foto.src = 'img/' + randomfoto + '.png';
//     foto.style.top = (randY + "px");
    
//     document.getElementById('plate').prepend(foto);


//     fullName = burgername.join("-");
//     document.getElementById('name').innerHTML = fullName + " Burger";
// }







document.addEventListener('click', function () {
    plate.innerHTML = "";
    burgername = [];
    name.innerHTML = "";
    futsal();
});


function futsal() {
    ingredients.sort(function() { return 0.5 - Math.random() });
    ingredients.unshift('top bun');
    ingredients.push('bun');
    ingredients.forEach(ingredient => {
        counter--;
        randX = Math.ceil(Math.random() * x);
        randY = Math.ceil(Math.random() * y);
    
        console.log(randX, randY);
    
        var foto = document.createElement("IMG");
        
        burgername.push(ingredient);
        console.log(burgername);
    
        console.log(counter);
    
        foto.style.zIndex = counter;
        foto.src = 'img/' + ingredient + '.png';
        foto.style.top = (randY + "px");
        
        document.getElementById('plate').prepend(foto);
    
    
        fullName = burgername.join("-");
        document.getElementById('name').innerHTML = fullName + " Burger";
    });
}