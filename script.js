const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;


const setBgTobody = () => {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBgTobody()

const setActiveSlide = () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}