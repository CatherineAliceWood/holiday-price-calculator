//get images from DOM
const cyprusImg = document.getElementById("cyprus-img");
const norwayImg = document.getElementById("norway-img");
const portugalImg = document.getElementById("portugal-img");
const countryImgs = document.getElementsByClassName("country-imgs");

const trainImg = document.getElementById("train-img");
const aeroplaneImg = document.getElementById("aeroplane-img");
const ferryImg = document.getElementById("ferry-img");
const travelImgs = document.getElementsByClassName("travel-imgs");

const hotelImg = document.getElementById("hotel-img");
const campsiteImg = document.getElementById("campsite-img");
const apartmentImg = document.getElementById("apartment-img");
const accommodationImgs = document.getElementsByClassName("accommodation-imgs");

//get figures from DOM
const cyprusFig = document.getElementById("cyprus-fig").innerHTML;
const norwayFig = document.getElementById("norway-fig").innerHTML;
const portugalFig = document.getElementById("portugal-fig").innerHTML;

const trainFig = document.getElementById("train-fig").innerHTML;
const aeroplaneFig = document.getElementById("aeroplane-fig").innerHTML;
const ferryFig = document.getElementById("ferry-fig").innerHTML;

const hotelFig = document.getElementById("hotel-fig").innerHTML;
const campsiteFig = document.getElementById("campsite-fig").innerHTML;
const apartmentFig = document.getElementById("apartment-fig").innerHTML;

//get buttons from DOM
const calculateBtn = document.getElementById("calculate-btn");
const wildcardBtn = document.getElementById("wildcard-btn");

//get main content from DOM
const mainContent = document.getElementById("hero");

//create arrays of selection options for wildcard
const options = [
  ["Cyprus", "Norway", "Portugal"],
  ["train", "aeroplane", "ferry"],
  ["hotel", "campsite", "apartment"]
];

// create an empty variable to store the price total
let total;

//create an empty array to store selected wildcard options
let wildcardOptions = [];

//create empty strings to save selections
let destination = "";
let travel = "";
let accommodation = "";

//refactor code to have functions separate from event listeners
function selectCyprus() {
  //empty the string to ensure only one selection is added
  destination = "";
  //add console.log to check it's working
  console.log("You selected Cyprus");
  //remove border on other imgs in section when one is clicked
  for (let i = 0; i < countryImgs.length; i++) {
    countryImgs[i].classList.remove("img-selected");
  }
  //add class for border around selected img
  cyprusImg.classList.add("img-selected");
  //asign country name to destination variable
  destination = "Cyprus";
}

//write a function like the one above for all the other options
function selectNorway() {
  destination = "";
  console.log("You selected Norway");
  for (let i = 0; i < countryImgs.length; i++) {
    countryImgs[i].classList.remove("img-selected");
  }
  norwayImg.classList.add("img-selected");
  destination = "Norway";
}

function selectPortugal() {
  destination = "";
  console.log("You selected Portugal");
  for (let i = 0; i < countryImgs.length; i++) {
    countryImgs[i].classList.remove("img-selected");
  }
  portugalImg.classList.add("img-selected");
  destination = "Portugal";
}

function selectTrain() {
  travel = "";
  console.log("You selected train");
  for (let i = 0; i < travelImgs.length; i++) {
    travelImgs[i].classList.remove("img-selected");
  }
  trainImg.classList.add("img-selected");
  travel = "train";
}

function selectAeroplane() {
  travel = "";
  console.log("You selected aeroplane");
  for (let i = 0; i < travelImgs.length; i++) {
    travelImgs[i].classList.remove("img-selected");
  }
  aeroplaneImg.classList.add("img-selected");
  travel = "aeroplane";
}

function selectFerry() {
  travel = "";
  console.log("You selected ferry");
  for (let i = 0; i < travelImgs.length; i++) {
    travelImgs[i].classList.remove("img-selected");
  }
  ferryImg.classList.add("img-selected");
  travel = "ferry";
}

function selectHotel() {
  accommodation = "";
  console.log("You selected hotel");
  for (let i = 0; i < accommodationImgs.length; i++) {
    accommodationImgs[i].classList.remove("img-selected");
  }
  hotelImg.classList.add("img-selected");
  accommodation = "hotel";
}

function selectCampsite() {
  accommodation = "";
  console.log("You selected campsite");
  for (let i = 0; i < accommodationImgs.length; i++) {
    accommodationImgs[i].classList.remove("img-selected");
  }
  campsiteImg.classList.add("img-selected");
  accommodation = "campsite";
}

function selectApartment() {
  accommodation = "";
  console.log("You selected apartment");
  for (let i = 0; i < accommodationImgs.length; i++) {
    accommodationImgs[i].classList.remove("img-selected");
  }
  apartmentImg.classList.add("img-selected");
  accommodation = "apartment";
}

function renderSelection() {
  //change content of main section after this function is called when button is clicked, depending on selection
  if (destination === "Cyprus") {
    mainContent.innerHTML = `<div class="container text-center">
    <h2>You're selection:</h2>
    ${cyprusFig}
    <hr>
    </div>`;
    total = 300;
  } else if (destination === "Norway") {
    mainContent.innerHTML = `<div class="container text-center">
    <h2>You're selection:</h2>
    ${norwayFig}
    <hr>
    </div>`;
    total = 200;
  } else if (destination === "Portugal") {
    mainContent.innerHTML = `<div class="container text-center">
    <h2>You're selection:</h2>
    ${portugalFig}
    <hr>
    </div>`;
    total = 150;
    //add an else clause to catch if the user doesn't select anything
  } else {
    mainContent.innerHTML = `<div class="container text-center">
    <h2>You're selection:</h2>
    <p>Please refresh and select a destination</p>
    <hr>
    </div>`;
    total = 0;
  }

  //add travel selection to main content depending on user input
  if (travel === "train") {
    mainContent.innerHTML += `<div class="container text-center">${trainFig}<hr></div>`;
    total += 350;
  } else if (travel === "aeroplane") {
    mainContent.innerHTML += `<div class="container text-center">${aeroplaneFig}<hr></div>`;
    total += 600;
  } else if (travel === "ferry") {
    mainContent.innerHTML += `<div class="container text-center">${ferryFig}<hr></div>`;
    total += 250;
  } else {
    mainContent.innerHTML += `<div class="container text-center">
    <p>Please refresh and select a travel option</p>
    <hr>
    </div>`;
    total = 0;
  }

  //add accommodation selection to main content depending on user input
  if (accommodation === "hotel") {
    mainContent.innerHTML += `<div class="container text-center">${hotelFig}</div>`;
    total += 1000;
  } else if (accommodation === "campsite") {
    mainContent.innerHTML += `<div class="container text-center">${campsiteFig}</div>`;
    total += 350;
  } else if (accommodation === "apartment") {
    mainContent.innerHTML += `<div class="container text-center">${apartmentFig}</div>`;
    total += 750;
  } else {
    mainContent.innerHTML += `<div class="container text-center">
    <p>Please refresh and select an accommodation option</p>
    <hr>
    </div>`;
    total = 0;
  }

  //add total to main content
  mainContent.innerHTML += `
  <div class="container text-center">
    <hr>
    <h3>Total price: £${total}</h3>
  </div>
  `;
}

//create a function for getting the wildcard options
function getWildcardOptions() {
  //create for loop to iterate through array of options
  for (let i = 0; i < options.length; i++) {
    //save wildcard options in array
    wildcardOptions.push(
      options[i][Math.floor(Math.random() * options[i].length)]
    );
    //console.log to check it's working
    console.log(wildcardOptions);
  }
  //add wildcard options to selection variables
  destination = wildcardOptions[0];
  travel = wildcardOptions[1];
  accommodation = wildcardOptions[2];
  //call the renderSelection function
  renderSelection();
}

function drumroll() {
  alert("🥁🥁🥁Drumroll please!🥁🥁🥁");
}
//add click event listener to each image
cyprusImg.addEventListener("click", selectCyprus);
norwayImg.addEventListener("click", selectNorway);
portugalImg.addEventListener("click", selectPortugal);

//add click event listener to each travel option
trainImg.addEventListener("click", selectTrain);
aeroplaneImg.addEventListener("click", selectAeroplane);
ferryImg.addEventListener("click", selectFerry);

//add click event listener to each accommodation option
hotelImg.addEventListener("click", selectHotel);
campsiteImg.addEventListener("click", selectCampsite);
apartmentImg.addEventListener("click", selectApartment);

//add click event listener to buttons
calculateBtn.addEventListener("click", renderSelection);
wildcardBtn.addEventListener("click", getWildcardOptions);
wildcardBtn.addEventListener("click", drumroll);