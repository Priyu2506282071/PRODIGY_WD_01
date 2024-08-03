const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');
	
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }
});



navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ccc';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
