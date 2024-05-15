let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector(".header__scroll-btn.visible");
    const closeButton = document.querySelector(".header__scroll-btn.arrow_top");
    const targetOpenContainer = document.querySelector("#last-container");
    const targetCloseContainer = document.querySelector("#main-container");

    if (openButton && closeButton && targetOpenContainer && targetCloseContainer) {
        openButton.addEventListener("click", function(event) {
            event.preventDefault();
            targetOpenContainer.scrollIntoView({ behavior: "smooth" });
        });

        closeButton.addEventListener("click", function(event) {
            event.preventDefault();
            targetCloseContainer.scrollIntoView({ behavior: "smooth" });
        });
    }
});

