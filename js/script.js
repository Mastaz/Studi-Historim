const btnBurger = document.querySelector('.btnBurger');
const navbarItems = document.querySelector('.navbarItems');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    navbarItems.classList.toggle('navbarItemsVisible');
})