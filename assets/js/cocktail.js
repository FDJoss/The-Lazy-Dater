var btn = document.getElementById("date-button");
var alcoholListEl = document.getElementById("alcohol-list");
var cocktailNameEl = document.getElementById("cocktail-name");
var cocktailIngredientsEl = document.getElementById("cocktail-ingredients")
var cocktailRecipeEl = document.getElementById("cocktail-recipe");
var cocktailPictureEl = document.getElementById("cocktail-picture");
var resultWrapperEl = document.getElementById('result-wrapper');


function getRecipeApi(alcohol) {
    // console.log(alcohol)
    var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcohol
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            var randomCocktail = data.drinks[Math.floor(Math.random() * data.drinks.length)];
            console.log("random cocktail", randomCocktail)
            getCocktailDetails(randomCocktail.idDrink);
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
            resultWrapperEl.setAttribute('class', 'result-wrapper')
        })
};

function displayCocktailResults(cocktail) {
    saveCocktailsToStorage(cocktail);
    var drinkName = cocktail.strDrink
    // var ingredients and measurements = cocktail.strIngredient
    var recipe = cocktail.strInstructions
    var picture = cocktail.strDrinkThumb
    cocktailNameEl.textContent = drinkName
    cocktailRecipeEl.textContent = recipe
    cocktailPictureEl.src = picture

    cocktailIngredientsEl.innerHTML = ""

    for (var i = 1; i <= 15; i++) {
        var p = document.createElement("p");
        var ingredient = "strIngredient" + i
        var measure = "strMeasure" + i
        if (cocktail[ingredient] !== null && cocktail[measure] !== null) {
            p.textContent = cocktail[ingredient] + " " + cocktail[measure]
            cocktailIngredientsEl.append(p)
        } else if (cocktail[ingredient] !== null) {
            p.textContent = cocktail[ingredient]
            cocktailIngredientsEl.append(p) 
        }
        else {
            return;
        }
    }
};

function saveCocktailsToStorage(cocktail) {
    var cocktailList = (JSON.parse(localStorage.getItem("cocktail-details")) || []).slice(0,10);
    console.log(cocktail);
    cocktailList.unshift(cocktail);
    localStorage.setItem("cocktail-details", JSON.stringify(cocktailList));
    };