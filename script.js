baseURL = ('https://api.covid19api.com/');
chinaURL = ('https://api.covid19api.com/live/country/china/status/confirmed');
indiaURL = ('https://api.covid19api.com/live/country/china/status/confirmed');
countriesURL = ('https://api.covid19api.com/countries"');

// const USA = document.querySelector(".")


//Needs China, US, India, Indonesia flags for hyperlinks to activate country query for each.
chinaIMG = document.getElementById('imgChina');




chinaIMG.addEventListener('click', requestChina);




// FETCH //

// fetch("https://api.covid19api.com/live/country/china/status/confirmed")
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



//MAIN DATA FUNCTION
function requestChina(e) {
e.preventDefault();

fetch(chinaURL)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

