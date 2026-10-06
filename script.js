const hamburger = document.querySelector('#header .hamburger');
const mobile_menu = document.querySelector('#header .nav-list ul');
const menu_item = document.querySelectorAll('#header .nav-list ul li a');

if (hamburger && mobile_menu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    });
}