const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const peragrafs = document.querySelectorAll(".pera");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    peragrafs.forEach((peragraf) => {
        peragraf.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    peragrafs[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});