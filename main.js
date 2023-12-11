const sidemenuBtn = document.getElementById("sidemenu-btn");
const sidemenu = document.querySelector(".sidemenu-area");
const closeBtn = document.getElementById("sidemenu-close-btn");
const overlay = document.querySelector(".sidemenu-overlay");
const dropdownToggle = document.querySelectorAll(".cp-dropdown-toggle");

sidemenuBtn.addEventListener("click", () => {
  sidemenu.classList.add("active");
});

function menuClose() {
  sidemenu.classList.remove("active");
}
dropdownToggle.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.nextSibling.parentElement.nextElementSibling);
    const elSubMenu = e.target.nextSibling.parentElement.nextElementSibling;

    elSubMenu.classList.toggle("active");
  });
});
closeBtn.addEventListener("click", menuClose);
overlay.addEventListener("click", menuClose);
