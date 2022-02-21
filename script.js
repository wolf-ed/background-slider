const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide === slides.length) {
        activeSlide = 0
    }
    setBgTobody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--
    if (activeSlide === 0) {
        activeSlide = slides.length
    }
    setBgTobody()
    setActiveSlide()
})


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