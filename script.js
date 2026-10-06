// Pinadali at lininis na script.js para hindi ma-interfere sa mobile navbar

const header = document.querySelector('.header.container');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#293241';
    } else {
        header.style.backgroundColor = 'rgba(31, 30, 30, 0.95)';
    }
});