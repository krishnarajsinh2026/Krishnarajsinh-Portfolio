document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbar = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (navbar.classList.contains("show")) {
                const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);
                collapse.hide();
            }

        });
    });

});