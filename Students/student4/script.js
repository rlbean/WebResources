//grab the HTML element with a class called menu-icon -- hamburger lines
const menuIcon = document.querySelector(".menu-icon");
//grab outer div class navbar
const navbar = document.querySelector(".navbar");

//when you click on the hamburger
menuIcon.addEventListener("click", () => {
    //adds and removes toggle to the navbar class div
    //effectively showing and hiding the navigation screen
    navbar.classList.toggle("change")
})