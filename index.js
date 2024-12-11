// Get the button
const goTopBtn = document.getElementById("goTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
goTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});