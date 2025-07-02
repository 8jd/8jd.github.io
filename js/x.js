const videos = [
    "video/a.mp4",
    "video/b.mp4",
    "video/c.mp4",
    "video/d.mp4",
    "video/e.mp4"
];
const randInd = Math.floor(Math.random() * videos.length);
const x = videos[randInd];
document.getElementById("x").src = x;
