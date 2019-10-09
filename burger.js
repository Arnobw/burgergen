plate = document.getElementById('plate');
name = document.getElementById('name');
var counter = 800;
burgername = [];
var x = 500;
var y = 250;
ingredients = ['top bun', 'beef', 'tomatoes', 'lettuce', 'pickles', 'cheese', 'bun', 'onions', 'chicken', 'chili sauce', 'bacon'];



function place() {
    randX = Math.ceil(Math.random() * x);
    randY = Math.ceil(Math.random() * y);

    console.log(randX, randY);

    var foto = document.createElement("IMG");

    randomfoto = ingredients[Math.floor(Math.random() * ingredients.length)];

    burgername.push(randomfoto);
    console.log(burgername);
    counter--;
    console.log(counter);

    foto.style.zIndex = counter;
    foto.src = 'img/' + randomfoto + '.png';
    foto.style.top = (randY + "px");
    // foto.style.left = (randX + "px");

    document.getElementById('plate').appendChild(foto);

    fullName = burgername.join("-");
    document.getElementById('name').innerHTML = fullName + " Burger";
}



function generate() {
    aantal = Math.floor(Math.random() * 11);

    for (i = 0; i <= aantal; i++) {
        place();
    }
}

generate();

document.addEventListener('click', function () {
    plate.innerHTML = "";
    burgername = [];
    name.innerHTML = "";
    generate();
});


