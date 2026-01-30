const videoThumbnail = document.getElementById("video-thumbnail");
const playButton = document.querySelector(".play-button");

const loadVideo = function () {
  var youtubeDiv = document.getElementById("youtube-video");
  if (youtubeDiv) {
    youtubeDiv.innerHTML =
      '<iframe width="80%" src="https://www.youtube.com/embed/0t3_GjHhOTw?si=crY-y94fTVrP2XjL&autoplay=1&controls=0&vq=hd1080" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="aspect-ratio: 16/9;"></iframe>';
  }
};

if (videoThumbnail) {
  videoThumbnail.addEventListener("click", loadVideo);
}

if (playButton) {
  playButton.addEventListener("click", loadVideo);
}