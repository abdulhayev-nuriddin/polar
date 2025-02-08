
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".product-links");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            links.forEach(l => l.classList.remove("active"));

            this.classList.add("active");
        });
    });
});

