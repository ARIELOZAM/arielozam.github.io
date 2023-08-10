function darkMode() {
const darkModeBtn = document.querySelector("#darkModeSwitch"); 
darkModeBtn.addEventListener("click", function() {
// p and heading elements should change to white
const paragraphs = document.querySelectorAll(p); // Select all p elements
const headingOne = document.querySelectorAll(h1); // Select all h1 elements
const headingTwo = document.querySelectorAll(h2); // Select all h2 elements
const headingThree = document.querySelectorAll(h3); // Select all h3 elements

	paragraphs.toggleClass("dark-mode-text");
	

});

	
}


darkMode();