baseURL = ('https://api.covid19api.com/');
summaryURL = ("https://api.covid19api.com/summary");
indiaURL = ('https://api.covid19api.com/live/country/china/status/confirmed');
countriesURL = ('https://api.covid19api.com/countries"');

// const USA = document.querySelector(".")


//COUNTRY IMAGES
chinaFlag = document.getElementById('imgChina');
indiaFlag = document.getElementById('imgIndia');
usaFlag = document.getElementById('imgUSA');

//CARD BODY AND H4 TAGS

cardChina = document.querySelector('.card-body-china');
cardIndia = document.querySelector('.card-body-india');
cardUSA = document.querySelector('.card-body-usa')

cardChina.style.display = 'none';
cardIndia.style.display = 'none';
cardUSA.style.display = 'none';

chinaHeader = document.getElementById('china-header');
indiaHeader = document.getElementById('india-header');
usaHeader = document.getElementById('usa-header');

//ON CLICK EVENTS HERE

chinaFlag.addEventListener('click', requestChina);
indiaFlag.addEventListener('click', requestIndia);
usaFlag.addEventListener('click', requestUSA);

//ADD TO ELEMENTS P TAGS TO DISPLAY RESULTS





//MAIN CHINA DATA FUNCTION
function requestChina() {

    fetch(summaryURL)
        .then(function (result) {    
            console.log(result)      
            return result.json();   
        })
        .then(function (json) {     
            console.log(json);
            displayResultsChina(json);
        })

}

// DISPLAY CHINA RESULTS

function displayResultsChina(json) {
    // console.log('Results:', json);
    let chinaObj = json.Countries[35]
    console.log(chinaObj);

    let china = chinaObj.Country
    console.log(china);

    let chinaTotalCases = chinaObj.TotalConfirmed
    console.log(chinaTotalCases);

    let chinaTotalDeaths = chinaObj.TotalDeaths
    console.log(chinaTotalDeaths);

    chinaHeader.style.display = 'none';
    cardChina.style.display = 'block';

    let paraOne = document.createElement('p');
    let paraTwo = document.createElement('p');

    paraOne.textContent = ('Total Confirmed: ' + chinaTotalCases);
    paraTwo.textContent = ('Total Deaths: ' + chinaTotalDeaths);

    cardChina.appendChild(paraOne);
    cardChina.appendChild(paraTwo);
    
}   


// MAIN INDIA DATA FUNCTION

function requestIndia() {
    fetch(summaryURL)
        .then(function (result) {    
            console.log(result)      
            return result.json();   
        })
        .then(function (json) {     
            console.log(json);
            displayResultsIndia(json);
        })

}

// DISPLAY INDIA RESULTS

function displayResultsIndia(json) {
    // console.log('Results:', json);
    let indiaObj = json.Countries[76]
    console.log(indiaObj);

    let india = indiaObj.Country
    console.log(india);

    let indiaTotalCases = indiaObj.TotalConfirmed
    console.log(indiaTotalCases);

    let indiaTotalDeaths = indiaObj.TotalDeaths
    console.log(indiaTotalDeaths);

    indiaHeader.style.display = 'none';
    cardIndia.style.display = 'block';

    let paraOne = document.createElement('p');
    let paraTwo = document.createElement('p');
    let average = document.createElement('button');

    paraOne.textContent = ('Total Confirmed: ' + indiaTotalCases);
    paraTwo.textContent = ('Total Deaths: ' + indiaTotalDeaths);

    average.innerText = 'Death %'
    average.addEventListener('click', averageDeaths);

    // function averageDeaths() {
    //     a = indiaTotalDeaths
    //     b = indiaTotalCases
    //     let averageDeaths = (a / b) * 100;
    //     console.log(averageDeaths);
    //     return averageDeaths;
    // }
    // let displayAverage = document.createElement('p');
    // displayAverage.textContent = (averageDeaths);
// working on averaging function to print out death percentage
    cardIndia.appendChild(paraOne);
    cardIndia.appendChild(paraTwo);
    cardIndia.appendChild(average);

} 



//MAIN USA DATA FUNCTION
function requestUSA() {
    fetch(summaryURL)
    .then(function (result) {    
        console.log(result)      
        return result.json();   
    })
    .then(function (json) {     
        console.log(json);
        displayResultsUSA(json);
    })

}     


// DISPLAY USA RESULTS

function displayResultsUSA(json) {
    // console.log('Results:', json);
   let usaObj = json.Countries[179]
    console.log(usaObj);

    let usa = usaObj.Country
    console.log(usa);

    let usaTotalCases = usaObj.TotalConfirmed
    console.log(usaTotalCases);

    let usaTotalDeaths = usaObj.TotalDeaths
    console.log(usaTotalDeaths);

    usaHeader.style.display = 'none';
    cardUSA.style.display = 'block';

    let paraOne = document.createElement('p');
    let paraTwo = document.createElement('p');

    paraOne.textContent = ('Total Confirmed: ' + usaTotalCases);
    paraTwo.textContent = ('Total Deaths: ' + usaTotalDeaths);

    cardUSA.appendChild(paraOne);
    cardUSA.appendChild(paraTwo);

}   
