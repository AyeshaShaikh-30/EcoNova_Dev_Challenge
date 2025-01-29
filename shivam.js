document.addEventListener("DOMContentLoaded", function () {
    const returnHomeBtn = document.getElementById("return-home-btn");

    if (returnHomeBtn) {
        returnHomeBtn.addEventListener("click", function () {
            console.log("✅ Button clicked! Starting animation...");
            
            gsap.to("body", { 
                opacity: 0, 
                duration: 0.5, 
                onComplete: function() {
                    console.log("✅ Animation done! Redirecting...");
                    window.location.href = "index.html"; // Redirect in same tab
                }
            });
        });
    } else {
        console.error("❌ Button not found: return-home-btn");
    }
});









document.addEventListener("DOMContentLoaded", function () {
    const returnHomeBtn = document.getElementById("start-btn");

    if (returnHomeBtn) {
        returnHomeBtn.addEventListener("click", function () {
            console.log("✅ Button clicked! Starting animation...");
            
            gsap.to("body", { 
                opacity: 0, 
                duration: 0.5, 
                onComplete: function() {
                    console.log("✅ Animation done! Redirecting...");
                    window.location.href = "ecobrick.html"; // Redirect in same tab
                }
            });
        });
    } else {
        console.error("❌ Button not found: return-home-btn");
    }
});


