"use strict";
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const openSocial = document.querySelector('.open');
const social = document.querySelector('.social');
hamburguer === null || hamburguer === void 0 ? void 0 : hamburguer.addEventListener('click', () => {
    hamburguer === null || hamburguer === void 0 ? void 0 : hamburguer.classList.toggle('dark');
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle('active');
});
openSocial === null || openSocial === void 0 ? void 0 : openSocial.addEventListener('click', () => {
    social === null || social === void 0 ? void 0 : social.classList.toggle('open-social');
});
