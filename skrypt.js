// Podświetlanie aktywnej zakładki
const navLinks = document.querySelectorAll('#nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Hover nie zmienia blur ani cieni – tylko kolor
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = "#ff00ff";
        link.style.webkitTextFillColor = "#ff00ff";
    });
    link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) {
            link.style.color = "";
            link.style.webkitTextFillColor = "";
        }
    });
});
