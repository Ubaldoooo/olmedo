document.querySelector(".next").addEventListener("click", function() {
    const carousel = document.querySelector(".carousel");
    carousel.appendChild(carousel.firstElementChild);
});

document.querySelector(".prev").addEventListener("click", function() {
    const carousel = document.querySelector(".carousel");
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
});
