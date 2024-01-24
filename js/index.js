// Show or hide the "Back to Top" link based on the user's scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var backToTopButton = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Smooth scrolling when the "Back to Top" link is clicked
document.querySelector(".back-to-top").addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
