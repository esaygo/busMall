'use strict'

var imagesArray = ['bag.jpg', 'banana.jpg','boots.jpg', 'chair.jpg', 'cthulhu.jpg','dragon.jpg','pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

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

    image1.addEventListener('click', handleClickOnFirst);
    image2.addEventListener('click', handleClickOnSecond);
    image3.addEventListener('click', handleClickOnThird);

    var image1Clicks = 0;
    var image2Clicks = 0;
    var image3Clicks = 0;

    function handleClickOnFirst() {
      image1Clicks += 1;
      console.log('handleClickOnFirst');
    }
    function handleClickOnSecond() {
      image2Clicks += 1;
      console.log('handleClickOnSecond');
    }
    function handleClickOnThird() {
      image3Clicks += 1;
      console.log('handleClickOnThird');
    }

    getRandomImage1();
    getRandomImage2();
    getRandomImage3();

      while (image1.src === image2.src || image2.src === image3.src || image1.src === image3.src) {
          console.log('duplicates prevented');
          getRandomImage1();
          getRandomImage2();
          getRandomImage3();
      };
