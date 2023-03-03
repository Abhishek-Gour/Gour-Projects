const mobile_nav = document.querySelector('.mobileNavBarButton');
const navHeader = document.querySelector('.main_header');
const toggleNavbar = () => {
    navHeader.classList.toggle('active');
}
mobile_nav.addEventListener('click',() => toggleNavbar());

