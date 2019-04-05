function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

$(document).ready(function() {
    $('#myCarousel').carousel({
	    interval: 10000
	})
});