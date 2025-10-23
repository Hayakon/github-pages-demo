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

window.addEventListener('DOMContentLoaded', (event) => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://hayakon.github.io/github-pages-demo/?t=' + new Date().getTime();
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    document.getElementById('iframe-container').appendChild(iframe);
});

document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if(href && href.endsWith('.html')) {
        link.setAttribute('href', href + '?t=' + new Date().getTime());
    }
});