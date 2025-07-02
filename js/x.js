const videos = [
    "video/e.mp4",
    "video/x.mp4",
    "video/i.mp4",
    "video/l.mp4",
    "video/е.mp4"
];
const randInd = Math.floor(Math.random() * videos.length);
const x = videos[randInd];
document.getElementById("x").src = x;
