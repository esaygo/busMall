'use strict'

var imagesArray = [];
var namesArray = ['bag','banana','boots','chair','cthulhu','dragon','pen','scissors','shark','sweep','unicorn','usb','water_can','wine_glass'];
var pathArray = ['bag.jpg','banana.jpg','boots.jpg','chair.jpg','cthulhu.jpg','dragon.jpg','pen.jpg','scissors.jpg','shark.jpg','sweep.jpg','unicorn.jpg','usb.jpg','water_can.jpg','wine_glass.jpg'];
var getChart = document.getElementById('canvas').getContext('2d');
var chartData = localStorage.getItem('chartPersist');
if(chartData) {
var data = JSON.parse(chartData);
} else {
  console.log('Local storage empty! Initializing!');
  localStorage.setItem('chartPersist', JSON.stringify(data));
  }

function Image(productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.numClicks = 0;
  this.timesDisplayed = 0;
  // imagesArray.push(this);
}
for(var i = 0; i < namesArray.length; i++) {
  var prodArray = new Image(namesArray[i],pathArray[i]);
  imagesArray.push(prodArray);
}

var image1 = document.getElementById('1');
var image2 = document.getElementById('2');
var image3 = document.getElementById('3');
var randomNumber1 = 0;
var randomNumber2 = 0;
var randomNumber3 = 0;
var globalClickTracker = 0;

var arrayOfArrays = [[],[],[]];

function getThreeImages() {
  getRandomImage1();
  getRandomImage2();
  getRandomImage3();
  duplicatePreventer();
}
function duplicatePreventer() {
  while (image1.src === image2.src || image1.src === image3.src || image2.src === image3.src){
    getThreeImages();
  };
}
function getRandomImage1() {
  randomNumber1 = Math.floor(Math.random() * imagesArray.length);
  document.getElementById('1').src= "images-to-be-used/" +  pathArray[randomNumber1].filePath;
}
function getRandomImage2() {
  randomNumber2 = Math.floor(Math.random() * imagesArray.length);
  document.getElementById('2').src= "images-to-be-used/" +  pathArray[randomNumber2].filePath;
}
function getRandomImage3() {
  randomNumber3 = Math.floor(Math.random() * imagesArray.length);
  document.getElementById('3').src= "images-to-be-used/" +  pathArray[randomNumber3].filePath;
}

var button = document.getElementById('loadButton');

var image1Clicks = 0;
var image2Clicks = 0;
var image3Clicks = 0;

function handleClick() {
  imagesArray[randomNumber1].timesDisplayed += 1;
  globalClickTracker += 1;
  if (globalClickTracker === 15) {
    button.removeAttribute('hidden');
  }
  imagesArray[randomNumber1].numClicks += 1;
  getThreeImages();
}
image1.addEventListener('click', handleClick);
image2.addEventListener('click', handleClick);
image3.addEventListener('click', handleClick);
button.addEventListener('click', handleButton);
getThreeImages();

function handleButton() {
  for (var i = 0; i < imagesArray.length; i++) {
  }
  for (var i = 0; i < imagesArray.length; i++) {
    arrayOfArrays[0][i] = imagesArray[i].productName;
    arrayOfArrays[1][i] = imagesArray[i].numClicks;
    arrayOfArrays[2][i] = imagesArray[i].timesDisplayed;
  }
  var data = {
    labels: ["bag", "banana", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"],
    datasets: [
      {
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        data: arrayOfArrays[1]
      },
      {
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        data: arrayOfArrays[2]
      }
    ]
  };
}

function makeChart(data) {
  new Chart(getChart).Bar(data);
  chartExists = true;
  }
