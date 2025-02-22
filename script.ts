const hamburguer = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

const openSocial = document.querySelector('.open')
const social = document.querySelector('.social')

hamburguer?.addEventListener('click', () => {
    hamburguer?.classList.toggle('dark')
    navMenu?.classList.toggle('active')
})

openSocial?.addEventListener('click', () => {
    social?.classList.toggle('open-social')
})