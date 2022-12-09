var cocktailDetails = JSON.parse(localStorage.getItem("cocktail-details"));
var cocktailEl = document.getElementById("cocktails");

function loadCocktail(){
    for (var i=0; i < cocktailDetails.length; i++) {
        var item=document.createElement("li");
        item.textContent=cocktailDetails[i].strDrink;
        cocktailEl.appendChild(item);
    }
}
loadCocktail()

var movieDetails = JSON.parse(localStorage.getItem("movie-details"));
var movieEl = document.getElementById("movies");

function loadMovie(){
    for (var i=0; i < movieDetails.length; i++) {
        var item=document.createElement("li");
        item.textContent=movieDetails[i].title;
        movieEl.appendChild(item);
    }
}
loadMovie()