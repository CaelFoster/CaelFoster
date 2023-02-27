// check js is connected
console.log('hiii hiii ^_^');

//i made this a while ago and ill have use for it soon//

/////////////////invert button///////////////////////////

/* const button = document.getElementsByClassName("button")[0];
let toggle = false;
button.addEventListener("click", (e) => {
  toggle = !toggle;

  const notImg = document.querySelector('*');
  const img = document.querySelector('#img2');
  const img2 = document.querySelector('.containerright');
  

  if (toggle) {
    notImg.style.filter = "invert(1)";


    /*double inverts*/

    /*
    img.style.filter = "invert(1)";
    img2.style.filter = "invert(1)";
  } else {
    img.style.filter = "invert(0)";
    img2.style.filter = "invert(0)";
    notImg.style.filter = "invert(0)";
  }
}); 

*/
////////////////////////////////////////





  // your JavaScript code goes here

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  let index = currentIndex - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage(index);
});

nextButton.addEventListener('click', () => {
  let index = currentIndex + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
});

showImage(0);

