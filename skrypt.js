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

window.addEventListener('DOMContentLoaded', () => {
    const timestamp = new Date().getTime();

    // 1. Kontener iframe
    const iframeContainer = document.getElementById('iframe-container');
    if(!iframeContainer) return;

    // 2. Tworzymy iframe z timestampem
    const iframe = document.createElement('iframe');
    iframe.src = 'https://hayakon.github.io/github-pages-demo/?t=' + timestamp;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.overflow = 'auto';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'yes');
    iframe.setAttribute('loading', 'lazy'); // szybsze wczytywanie

    // Dodajemy iframe do kontenera
    iframeContainer.appendChild(iframe);

    // 3. Dodajemy timestamp do wszystkich linków do plików HTML (podstrony)
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        let href = link.getAttribute('href');
        if(href) {
            if(!href.includes('?')) {
                link.setAttribute('href', href + '?t=' + timestamp);
            } else {
                link.setAttribute('href', href + '&t=' + timestamp);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Twoje CSS zrobi resztę
        menuToggle.classList.toggle("open");
    });
});
