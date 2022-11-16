"use strict";

// set current year
const copyrightYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

// make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
