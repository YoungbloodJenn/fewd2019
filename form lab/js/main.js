//prevents page from reloading everytime there is a submit
$('form').on('submit', function(event) { 
    event.preventDefault();
  });