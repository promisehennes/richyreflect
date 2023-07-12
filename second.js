
function openPopup(imageUrl) {
  document.getElementById("popupImage").src = imageUrl;
  document.querySelector(".popup").classList.add("active");
}

function closePopup() {
  document.querySelector(".popup").classList.remove("active");
}
