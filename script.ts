const hamburguer = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

console.log(navMenu);

hamburguer?.addEventListener('click', () => {
    hamburguer?.classList.toggle('dark')
    navMenu?.classList.toggle('active')
})