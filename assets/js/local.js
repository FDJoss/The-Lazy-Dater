function saveDate() {
    var date = dateEl.value.trim();

    if (date !== '') {
      var dates =
        JSON.parse(window.localStorage.getItem('Dates')) || [];
  
      var newDate = {
        
        movie: cocktail,
      };
  
      date.push(newDate);
      window.localStorage.setItem('Dates', JSON.stringify(dates));
  
      window.location.href = 'index.html';
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 3f0c07d05b40b001cc04da9e9706a28d547cf1b2
