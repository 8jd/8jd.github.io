const videos = [
    "https://files.catbox.moe/vy665x.mp4",
    "https://files.catbox.moe/bg7hdv.mp4",
    "https://files.catbox.moe/l9yi9r.mp4",
    "https://files.catbox.moe/elg9zl.mp4",
    "https://files.catbox.moe/es017e.mp4"
];

const randInd = Math.floor(Math.random() * videos.length);
const x = videos[randInd];
document.getElementById("x").src = x;

// --- Title animation logic ---
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById("animatedTitle");
    // Fallback if the ID isn't found (though it should be with the HTML above)
    if (!titleElement) {
        console.error("Title element with ID 'animatedTitle' not found!");
        return;
    }

    const titleLetters = ["h", "a", "r", "m"];
    let currentLetterIndex = 0;

    function animateTitle() {
        if (currentLetterIndex < titleLetters.length) {
            titleElement.textContent = titleLetters[currentLetterIndex];
            currentLetterIndex++;
            setTimeout(animateTitle, 500); // Time between each letter (e.g., 'h' -> 'a')
        } else {
            // Animation finished for "harm", reset and start again after a pause
            currentLetterIndex = 0;
            setTimeout(animateTitle, 1000); // Pause before restarting the full "h-a-r-m" sequence
        }
    }

    // Start the animation
    animateTitle();
});
// --- End title animation logic ---
