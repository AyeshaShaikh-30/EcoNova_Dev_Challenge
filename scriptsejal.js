document.getElementById("toggleForm").addEventListener("click", function () {
    let formTitle = document.getElementById("formTitle");
    let authForm = document.getElementById("authForm");
    let toggleText = document.getElementById("toggleForm");

    if (formTitle.textContent === "Login") {
        formTitle.textContent = "Sign Up";
        toggleText.innerHTML = "Already have an account? <span>Login</span>";
    } else {
        formTitle.textContent = "Login";
        toggleText.innerHTML = "Don't have an account? <span>Sign Up</span>";
    }
});

document.getElementById("myButton").onclick = function () {
    let newTab = window.open("index.html", "_blank"); // Open new tab first

    if (newTab) { // Check if the new tab was allowed
        gsap.to("body", { opacity: 0, duration: 0.5, onComplete: function() {
            gsap.to("body", { opacity: 1, duration: 0 }); // Reset opacity
        }});
    } else {
        alert("Popup blocked! Allow popups for smooth redirection.");
    }
};
