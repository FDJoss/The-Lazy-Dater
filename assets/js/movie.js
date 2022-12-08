var tmdbApiKey = '39ffb119efa03619bd6b33a3a72d32f1'
var btn = document.getElementById("date-button");
var genreListEl = document.getElementById('genre-list');
var movieNameEl = document.getElementById("movie-name");
var movieDateEl = document.getElementById("movie-date")
var movieOverviewEl = document.getElementById("movie-overview");
var moviePosterEl = document.getElementById("movie-poster");


function getMovie(genre) {
    var movieListUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbApiKey + '&with_genres=' + genre + '&language=en-US&include_adult=false&with_original_language=en'
    fetch (movieListUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data){
            console.log(data)
            var randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
            console.log("Movie: ", randomMovie)
            getMovieDetails(randomMovie.id);
        })
};

btn.addEventListener("click", function(event) {
    var selectedGenre = genreListEl.value;
    event.preventDefault()
    getMovie(selectedGenre);
});

function getMovieDetails(movieId) {
    var movieDetailsURL = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + tmdbApiKey + '&language=en-US'
    fetch (movieDetailsURL)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            displayMovieResults(data)
        })
};

function displayMovieResults(movie) {
    var movieName = movie.title
    var movieDate = movie.release_date
    var movieOverview = movie.overview
    var picture = 'https://image.tmdb.org/t/p/w780' + movie.poster_path
    movieNameEl.textContent = movieName
    movieDateEl.textContent = movieDate
    moviePosterEl.src = picture
    movieOverviewEl.textContent = movieOverview
};