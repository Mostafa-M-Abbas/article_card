const shareButton = document.querySelector(".share-button");
const sharePopup = document.querySelector(".share-popup");

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("active");
  sharePopup.classList.toggle("active");
});

document.addEventListener("click", () => {
  if (!shareButton.contains(e.target) && !sharePopup.contains(e.target)) {
    shareButton.classList.remove("active");
    sharePopup.classList.remove("active");
  }
});
