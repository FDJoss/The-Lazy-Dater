var btn = document.querySelector("#date-button");

function getRecipeApi() {
var requestUrl ='https://www.thecocktaildb.com/api/json/v1/1/random.php'
fetch(requestUrl)
    .then(function (response) {
        console.log(response.json())
    }).then(function (data) {
       var randomCocktail = data.drinks[0].strDrink
       console.log(randomCocktail)
    }
    )
}

btn.addEventListener("click", function (event) {
    event.preventDefault()
    getRecipeApi()
    console.log(btn)
})