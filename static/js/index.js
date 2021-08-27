const openNav = document.querySelector(".fa-bars")
const navBar = document.querySelector("nav")

document.querySelector("nav").style.display = "none";

openNav.addEventListener("click", () => {
    navBar.style.display = "flex";
    navBar.classList.add("active")
    document.getElementById("main").style.display = "none";
    navBar.style.overflow = "hidden";
})

document.querySelector("#navul").addEventListener("click", function () {
    document.querySelector("nav").style.display = "none";
    document.getElementById("main").style.display = "block";
});
document.querySelector(".fa-times").addEventListener("click", function () {
    document.querySelector("nav").style.display = "none";
    document.getElementById("main").style.display = "block";
});
document.querySelector(".totop").addEventListener("click", ()=> {
    window.scrollTo(0, 0)
})