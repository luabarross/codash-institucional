"use strict";

// Open & Close Aside Navigation

const openNav = document.querySelector(".open-nav");
const openNav2 = document.querySelector(".open-nav2");
const closeNav = document.querySelector(".close-nav");
const asideOverlay = document.querySelector(".aside-navigation-overlay");
const asideNav = document.querySelector(".aside-navigation");

openNav.addEventListener("click", function(){
	asideOverlay.classList.add("active");
	asideNav.classList.add("active");
})

openNav2.addEventListener("click", function(e){
	e.preventDefault();
	asideOverlay.classList.add("active");
	asideNav.classList.add("active");
})

closeNav.addEventListener("click", function(){
	asideOverlay.classList.remove("active");
	asideNav.classList.remove("active");
})

