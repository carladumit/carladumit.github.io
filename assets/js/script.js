const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight * 0.8){
      el.classList.add("active");
    }
  });
});