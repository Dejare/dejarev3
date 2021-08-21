const openNav = document.querySelector(".fa-bars")
const navBar = document.querySelector("nav")

document.querySelector("nav").style.display = "none";

openNav.addEventListener("click", () => {
    navBar.style.display = "flex";
    navBar.classList.toggle("active")
    document.getElementById("main").style.display = "none";
})

document.querySelector("#navul").addEventListener("click", function () {
    document.querySelector("nav").style.display = "none";
    document.getElementById("main").style.display = "block";
});
document.querySelector(".fa-times").addEventListener("click", function () {
    document.querySelector("nav").style.display = "none";
    document.getElementById("main").style.display = "block";
});
document.getElementById("projectbtn").addEventListener("click", ()=>{
    alert("Hey, You asked Whats Up. This website is still in development, so some features might not work or be a bit buggy. HOLD TIGHT, Dejare's Working.");
})

document.querySelector(".totop").addEventListener("click", ()=> {
    window.scrollTo(0, 0)
})