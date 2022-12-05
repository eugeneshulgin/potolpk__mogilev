 function onEntry1(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show-menu');
	  } else {
		change.target.classList.remove('element-show-menu');
	  }
	});
 }
 
 let options1 = {
	threshold: [0.5] };
 let observer1 = new IntersectionObserver(onEntry1, options1);
 let elements1 = document.querySelectorAll('.header__menu-list');
 
 for (let elm of elements1) {
	observer1.observe(elm);
 }