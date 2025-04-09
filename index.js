function toggleCacheDisplay() {
  var marques = document.getElementsByClassName("marque");

  for (let i = 0; i < marques.length; i++) {
    marques[i].addEventListener("click", function () {
      var caches = this.nextElementSibling; // Sélectionne l'élément .cache suivant
      if (caches.style.display === "block") {
        caches.style.display = "none";
      } else {
        caches.style.display = "block";
      }
    });
  }
}

toggleCacheDisplay();
