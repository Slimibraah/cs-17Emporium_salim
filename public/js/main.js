import {darkmode1 , darkmode2} from "./nuit.js";
import {indicator , img} from "./carousel.js"; 

let empo = document.querySelector('#navLogo');
let nav = document.querySelector('nav');
let logo = document.querySelector('.empor');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= '10') {
        empo.classList.add('fixed-top');
        empo.classList.remove('flex-column');
        empo.classList.add('justify-content-between');
        logo.style.fontSize = '25px';
        TransitionEvent
    }else{
        empo.classList.remove('fixed-top');
        empo.classList.add('flex-column');
        empo.classList.remove('justify-content-between');
        logo.style.fontSize = '50px';
    }
});