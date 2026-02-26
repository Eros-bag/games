const maxLives = 5;
let lives = sessionStorage.getItem("lives");

if (!lives) {
    lives = 0;
    sessionStorage.setItem("lives", lives);
}

updateLivesDisplay();

function updateLivesDisplay() {
    document.getElementById("lives").innerText = lives;
}

document.getElementById("watchAdBtn").addEventListener("click", () => {
    if (lives >= maxLives) {
        alert("Tu as déjà le maximum de vies !");
        return;
    }

    simulateAd();
});

function simulateAd() {
    alert("🎬 Publicité en cours... (simulation 3 secondes)");

    setTimeout(() => {
        lives++;
        sessionStorage.setItem("lives", lives);
        updateLivesDisplay();
        alert("✅ +1 vie ajoutée !");
    }, 3000);
}

const gameButtons = document.querySelectorAll(".game-btn");

gameButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        lives = parseInt(sessionStorage.getItem("lives")) || 0;

        if (lives <= 0) {
            e.preventDefault(); // Bloque le lien
            alert("❌ Tu n'as pas de vies ! Regarde une pub pour en obtenir une.");
            return;
        }

        // Déduire 1 vie
        lives--;
        sessionStorage.setItem("lives", lives);
        updateLivesDisplay();
    });
});