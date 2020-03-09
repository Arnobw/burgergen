plate = document.getElementById('plate');
name = document.getElementById('name');
var counter = 800;
burgername = [];
shuffled = [];
fullName = [];
var x = 500;
var y = 250;
ingredients = ['top bun', 'beef', 'tomatoes', 'lettuce', 'pickles', 'cheese', 'bun', 'onions', 'chicken', 'chili sauce', 'bacon'];








document.addEventListener('click', function () {
    plate.innerHTML = "";

    name.innerHTML = "";
    make_burger();
});


function make_burger() {
  var shuffled =  ingredients.sort(function() { return 0.5 - Math.random() });
    shuffled.unshift('top bun');
  shuffled.push('bun');
   shuffled.forEach(ingredient => {
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

    burgername = [];
    shuffled = [];
    fullName = "";
}

