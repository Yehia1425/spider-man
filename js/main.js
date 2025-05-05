
let header = document.querySelector("nav");
let navbar = document.querySelector(".navbar");





window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
});

