// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const catAudio = document.getElementById('cat-audio');
const dogImage = document.getElementById('dog-image');
const dogAudio = document.getElementById('dog-audio');
const horseImage = document.getElementById('horse-image');
const horseAudio = document.getElementById('horse-audio');

console.log(catImage, catAudio);

catImage.addEventListener('click', () => {
  catAudio.play();
});

dogImage.addEventListener('click', () => {
  dogAudio.play();
});

horseImage.addEventListener('click', () => {
  horseAudio.play();
});


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
