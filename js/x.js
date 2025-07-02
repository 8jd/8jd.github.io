const videos = [
    "e.mp4",
    "x.mp4",
    "i.mp4",
    "l.mp4",
    "е.mp4"
  ];
 const randInd = Math.floor(Math.random() * videos.length);
 const x = videos[randInd];
document.getElementById("x").src = x;
