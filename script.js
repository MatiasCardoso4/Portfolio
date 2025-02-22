var hamburguer = document.querySelector('.hamburguer');
var navMenu = document.querySelector('.nav-menu');
console.log(navMenu);
hamburguer === null || hamburguer === void 0 ? void 0 : hamburguer.addEventListener('click', function () {
    hamburguer === null || hamburguer === void 0 ? void 0 : hamburguer.classList.toggle('dark');
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle('active');
});
