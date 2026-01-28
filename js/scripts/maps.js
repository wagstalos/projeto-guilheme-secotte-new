const mapThumbnail = document.getElementById("map-thumbnail");

if (mapThumbnail) {
  mapThumbnail.addEventListener("click", function () {
    var mapContainer = document.getElementById("map-container");
    if (mapContainer) {
      mapContainer.innerHTML =
        '<iframe width="100%" height="290" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7315.196052332108!2d-46.65625800000001!3d-23.546956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5830b3047101%3A0xa3e843c4b2bf87bd!2sR.%20Itacolomi%2C%20333%20-%20Higien%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001239-020%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1727297139387!5m2!1spt-BR!2sus" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    }
  });
}
