	
	function menuToggle(x) {
  	x.classList.toggle("menu-toggle__change");
  	document.getElementById('sidebar').classList.toggle('show-sidebar');
	}

	
	window.addEventListener("scroll", function (event) {
    var navbar = document.getElementById("container-navbar");
    var navbarChange = navbar.offsetTop;
    var scroll = this.scrollY;
    if(scroll >= navbarChange) {
    	document.getElementById('navbar').classList.add('header-navbar__change-bg');
    	document.getElementById('bar1').classList.add('toggle-color');
    	document.getElementById('bar2').classList.add('toggle-color');
    	document.getElementById('bar3').classList.add('toggle-color');
    	
    } else {
    	document.getElementById('navbar').classList.remove('header-navbar__change-bg');
        document.getElementById('bar1').classList.remove('toggle-color');
    	document.getElementById('bar2').classList.remove('toggle-color');
    	document.getElementById('bar3').classList.remove('toggle-color');

    }
});
