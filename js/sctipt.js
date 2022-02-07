new Swiper ('.swiper', {
  autoplay: {// 
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  loop: true,
  speed: 1500,
  effect: 'coverflow',
});

let cap = document.querySelector('.box-cap');
let capButton = document.querySelector('#capButton');
let box = document.querySelector('.box');
capButton.onclick = function() {
  cap.classList.add('cap_open');
  box.classList.add('box_open');
}
let sound = document.createElement('audio');
sound.setAttribute('src' , 'музыка.wav');
setTimeout(() => {
  document.querySelector('.wrapper').classList.add('wrapper_hide');
  sound.play();
}, 3000);