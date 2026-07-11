const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const heroButton = document.querySelector(".hero a");

if (heroButton) {
    heroButton.addEventListener("mouseenter", () => {
        heroButton.style.transform = "translateY(-4px) scale(1.04)";
    });

    heroButton.addEventListener("mouseleave", () => {
        heroButton.style.transform = "translateY(0) scale(1)";
    });
}
