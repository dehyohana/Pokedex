var numrandom = Math.floor(Math.random() * 905)
document.getElementById("pokemon-img").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + [numrandom] + ".png";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


//UTILIZANDO JQUERY
var settings = {
    "url": "https://api-pokemon-login.herokuapp.com/api/up",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log("api de login: " + response);
  });


//UTILIZANDO JQUERY
var settings = {
    "url": "https://api-pokemon-mendes.herokuapp.com/api/up",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log("api de pokemon: " + response);
  });