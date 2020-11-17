// variable

let cursorPointer;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
const speed = 0.1;
const accordionbuttons = document.querySelectorAll(".detail-information-item header");
const toggleButtons = document.querySelectorAll(".detail-information-item header i");
const accordionContents = document.querySelectorAll(".detail-content");
window.onload = function () {
	cursorPointer = document.querySelector(".cursor-pointer");

	window.addEventListener("mousemove", mouseFunc);

	function mouseFunc(e) {
		x = e.clientX;
		y = e.clientY;
	}
	loop();
};

function loop() {
	mx += (x - mx) * speed;
	my += (y - my) * speed;

	cursorPointer.style.transform = "translate(" + mx + "px," + my + "px)";
	window.requestAnimationFrame(loop);
}

// accordion

for (let i = 0; i < accordionbuttons.length; i++) {
	accordionbuttons[i].addEventListener("click", showContent);
}

function showContent(e) {
	let matchingContent = e.currentTarget.parentElement.querySelector(".detail-content");
	matchingContent.classList.toggle("show");
	matchingContent.parentElement.querySelector("i").classList.toggle("rotate");

	// close other contents

	for (let i = 0; i < accordionContents.length; i++) {
		if (accordionContents[i] !== matchingContent) {
			accordionContents[i].classList.remove("show");
			accordionContents[i].parentElement.querySelector("i").classList.remove("rotate");
		}
	}
}
