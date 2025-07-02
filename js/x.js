const videos = [
    "https://files.catbox.moe/vy665x.mp4",
    "https://files.catbox.moe/bg7hdv.mp4"
    "https://files.catbox.moe/l9yi9r.mp4",
    "https://files.catbox.moe/elg9zl.mp4",
    "https://files.catbox.moe/es017e.mp4"
];
const randInd = Math.floor(Math.random() * videos.length);
const x = videos[randInd];
document.getElementById("x").src = x;