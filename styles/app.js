const header = document.getElementsByTagName('header');

const menu = document.querySelector('.menu')
const cancel = document.querySelector('.cancel')


menu.addEventListener('click',e=>{
    header.classList.add('mobile-menu-active')
})