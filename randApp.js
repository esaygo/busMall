'use strict'
var imagesArray = ['bag.jpg', 'banana.jpg','boots.jpg', 'chair.jpg', 'cthulhu.jpg','dragon.jpg','pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var first = document.getElementById('image1');
var second = document.getElementById('image2');
var third = document.getElementById('image3');

function getRandomImage1() {
  var randomNumber = Math.floor(Math.random() * imagesArray.length);
  document.getElementById('image1').src= "images-to-be-used/" +  imagesArray[randomNumber];
  }
function getRandomImage2() {
  var randomNumber = Math.floor(Math.random() * imagesArray.length);
  document.getElementById('image2').src= "images-to-be-used/" +  imagesArray[randomNumber];
  }
function getRandomImage3() {
    var randomNumber = Math.floor(Math.random() * imagesArray.length);
    document.getElementById('image3').src= "images-to-be-used/" +  imagesArray[randomNumber];
    }


    first.addEventListener('click', handleClickOnFirst);
    second.addEventListener('click', handleClickOnSecond);
    third.addEventListener('click', handleClickOnThird);

    var firstClicks = 0;
    var secondClicks = 0;
    var thirdClicks = 0;

    function handleClickOnFirst() {
      firstClicks += 1;
      first.textContent = 'first was clicked on' + firstClicks + ' times';
      if (firstClicks % 3  === 0)
      first.textContent = 'You\'re finished!'
    }
    function handleClickOnSecond() {
      secondClicks += 1;
      second.textContent = 'second was clicked on' + secondClicks + ' times';
    }
    function handleClickOnThird() {
      thirdClicks += 1;
      third.textContent = 'third was clicked on' + thirdClicks + ' times';
    }
    getRandomImage1();
    getRandomImage2();
    getRandomImage3();
