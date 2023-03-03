const menuBtn = document.querySelector('.menu-btn');
const hamburgerMenu = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll('.menu-nav__item')



let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburgerMenu.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        menuItem.forEach(item=>item.classList.add('open'))

        showMenu = true;
    }else{
        hamburgerMenu.classList.remove('open');
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        menuItem.forEach(item=>item.classList.remove('open'))

        showMenu = false;
    }
}