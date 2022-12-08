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

