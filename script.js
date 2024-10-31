document.getElementById('navbar-toggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar-dropdown');
    navbar.classList.toggle('hidden');
});

const navbarLinks = document.querySelectorAll('#navbar-dropdown a');
navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
        const navbar = document.getElementById('navbar-dropdown');
        navbar.classList.add('hidden');

        navbarLinks.forEach(l => {
            l.classList.remove('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700');
        });

        this.classList.add('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700');

        if (this.getAttribute('href') === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});

navbarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
allAnchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
};

backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
