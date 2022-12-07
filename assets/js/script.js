var btn = document.getElementById("date-button");
var alcoholListEl = document.getElementById("alcohol-list");


function getRecipeApi(alcohol) {
    // console.log(alcohol)
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcohol
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            var randomCocktail = data.drinks[Math.floor(Math.random()*data.drinks.length)];
            console.log("random cocktail", randomCocktail)
            getCocktailDetails(data.drinks[0].idDrink);
        })
};

btn.addEventListener("click", function (event) {
    var selectedAlcohol = alcoholListEl.value;
    event.preventDefault()
    getRecipeApi(selectedAlcohol)
    // console.log(selectedAlcohol);
});

function getCocktailDetails(id) {
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.drinks[0])
            displayCocktailResults(data.drinks[0])
        })
};

function displayCocktailResults(cocktail){
    var drinkName = cocktail.strDrink
    // var ingredients and measurements = cocktail.strIngredient
    var recipe = cocktail.strInstructions
    var picture = cocktail.strImageSource
    console.log(drinkName,recipe,picture)
};