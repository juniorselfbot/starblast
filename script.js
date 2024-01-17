// JavaScript for fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Event listener for scroll
    window.addEventListener("scroll", checkScroll);
});
