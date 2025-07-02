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

// Title animation
const titleElement = document.getElementById("animatedTitle");
const titleLetters = ["h", "a", "r", "m"];
let currentLetterIndex = 0;

function animateTitle() {
    if (currentLetterIndex < titleLetters.length) {
        titleElement.textContent = titleLetters[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(animateTitle, 500); // Adjust the delay (in milliseconds) as needed
    } else {
        // Optional: If you want the animation to loop, uncomment the next two lines
        // currentLetterIndex = 0;
        // setTimeout(animateTitle, 1000); // Delay before restarting the loop
    }
}

// Start the animation when the page loads
window.onload = animateTitle;
