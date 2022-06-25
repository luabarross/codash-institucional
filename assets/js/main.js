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

function addEvents(){

	const inputs = document.querySelectorAll(".form-group:not(.text-area) input.form-control");
	
	for ( var i = 0; i < inputs.length; i++ ) {
		
		inputs[i].addEventListener( "focus", function(e){

			if ( '' !== e.target.value ) return;
			let id = e.target.getAttribute("id");
			document.querySelector('[for="'+ id +'"]').style.opacity = "0";
		}, false );

		inputs[i].addEventListener( "blur", function(e){

			if ( '' !== e.target.value ) return;
			let id = e.target.getAttribute("id");
			document.querySelector('[for="'+ id +'"]').style.opacity = ".7";
		}, false );
	}
}

addEvents();
