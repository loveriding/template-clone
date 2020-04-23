	var classHoverList = document.getElementsByClassName('link-hover__left-right');
	classHoverList[0].addEventListener("mouseover",onMouseOver);
	classHoverList[1].addEventListener("mouseover",onMouseOver);
	classHoverList[2].addEventListener("mouseover",onMouseOver);
	classHoverList[3].addEventListener("mouseover",onMouseOver);
	classHoverList[4].addEventListener("mouseover",onMouseOver);

	classHoverList[0].addEventListener("mouseleave",onMouseLeave);
	classHoverList[1].addEventListener("mouseleave",onMouseLeave);
	classHoverList[2].addEventListener("mouseleave",onMouseLeave);
	classHoverList[3].addEventListener("mouseleave",onMouseLeave);
	classHoverList[4].addEventListener("mouseleave",onMouseLeave);

	function onMouseOver(e) {
		let i;
		switch(e.target.innerText) {
			case 'Speakers':
				i = 0;
				break;
			case 'Headphones':
				i = 1;
				break;
			case 'Televisions':
				i = 2;
				break;
			case 'Acessories':
				i = 3;
				break;
			case 'Stories':
				i = 4;
				break;
		}
		let s = 'sidebar__image-hover-show' + (i+1);
		let s1 = 'sidebar' +(i+1);
		document.getElementsByClassName('sidebar__image-hover')[i].classList.add(s);
		document.getElementById('sidebar').classList.add(s1);
	};

	function onMouseLeave(e) {
		let i;
		switch(e.target.innerText) {
			case 'Speakers':
				i = 0;
				break;
			case 'Headphones':
				i = 1;
				break;
			case 'Televisions':
				i = 2;
				break;
			case 'Acessories':
				i = 3;
				break;
			case 'Stories':
				i = 4;
				break;
		}
		let s = 'sidebar__image-hover-show' + (i+1);
		let s1 = 'sidebar' +(i+1);
		document.getElementsByClassName('sidebar__image-hover')[i].classList.remove(s);	
		document.getElementById('sidebar').classList.remove(s1);
	}