document.addEventListener("DOMContentLoaded", function () {
    const donateBtn = document.getElementById("donate");

    if (donateBtn) {
        donateBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            
            console.log("✅ Button clicked! Starting animation...");

            gsap.to("body", { 
                opacity: 0, 
                duration: 0.5, 
                onComplete: function() {
                    console.log("✅ Animation done! Redirecting...");
                    setTimeout(() => {
                        window.location.href = "donate.html"; 
                    }, 100); 
                }
            });
        });
    } else {
        console.error("❌ Button not found: donate");
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const gameBtn = document.getElementById("game"); // Get the button

    if (gameBtn) { // Check if button exists
        gameBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent any default action

            console.log("✅ Button clicked! Starting animation...");

            gsap.to("body", { 
                opacity: 0, 
                duration: 0.5, 
                onComplete: function() {
                    console.log("✅ Animation done! Redirecting...");
                    setTimeout(() => {
                        window.location.href = "game.html"; // Redirect after animation
                    }, 100); 
                }
            });
        });
    } else {
        console.error("❌ Button not found: game");
    }
});
