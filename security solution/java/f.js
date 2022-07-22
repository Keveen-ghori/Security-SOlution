const fs = document.querySelectorAll(".fbox");

var sliderNav = function(manual){
    fs.forEach((f) => {
        f.classList.remove("active");
    });
   
    fs[manual].classList.add("active");
}

fs.forEach((f, i) => {
    f.addEventListener("click", () => {
        sliderNav(i);
    });
});