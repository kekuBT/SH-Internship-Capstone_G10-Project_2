// --------- Navigation responsive ----------------
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navMenu = document.querySelectorAll('.nav-menu li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)


    burger.addEventListener("click", () => {

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)

        //Animate link
        navMenu.forEach((link, index) => {
            if (isActive) {
                link.style.animation = `navMenuFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: " + index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navMenuFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: " + index + " out");
            }
            console.log(link.style.animation);
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

// -------- Password hide and show ------------

var state = false;
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("confirm-password").setAttribute("type", "password");
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("confirm-password").setAttribute("type", "text");
        state = true;
    }
}