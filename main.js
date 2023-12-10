const sidemenuBtn = document.getElementById("sidemenu-btn");
const sidemenu = document.querySelector(".sidemenu-area");
const closeBtn = document.getElementById("sidemenu-close-btn");
const overlay = document.querySelector(".sidemenu-overlay");

sidemenuBtn.addEventListener("click", () => {
  sidemenu.classList.add("active");
});

function menuClose() {
  sidemenu.classList.remove("active");
}

closeBtn.addEventListener("click", menuClose);
overlay.addEventListener("click", menuClose);
