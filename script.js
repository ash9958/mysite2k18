showSlides();
function showSlides() {
	var i;
    var slides = document.getElementsByClassName("slide");
    slideIndex=Math.floor(Math.random() * 5);
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 5000);
}

window.onscroll = function() {
	var nav = document.getElementById('n1');
	if ( window.pageYOffset > 299 ) {
		nav.classList.add("navtop");
		nav.classList.remove("nav");
	} else {
		nav.classList.add("nav");
		nav.classList.remove("navtop");
	}
}

function thanks(){
	alert("Thanks for your feedback!");
}