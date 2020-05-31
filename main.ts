window.onscroll = function() {handleScroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function handleScroll(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
        return;
    }

    navbar.classList.remove("sticky");
};