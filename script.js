const openDiv = document.getElementById("openModalDiv");
const modal = document.getElementById("nativeModal");
const closeBtn = document.getElementById("closeModalBtn");

// Ouvrir la modale (active aussi le ::backdrop et la touche Échap)
openDiv.addEventListener("click", () => {
  modal.showModal();
});

// Fermer avec le bouton « × »
closeBtn.addEventListener("click", () => {
  modal.close();
});

// Fermer en cliquant sur l'arrière-plan (::backdrop)
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
