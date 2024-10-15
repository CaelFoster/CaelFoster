// check js is connected
console.log('hiii hiii ^_^');




  // carousel

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







