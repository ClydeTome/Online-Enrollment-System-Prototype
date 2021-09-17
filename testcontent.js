// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("myTopnav").style.padding = "0px 0px";
	
  } else {
    document.getElementById("myTopnav").style.padding = "250px 10px";
  }
}
AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back'
});