function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function isMobileDevice() {
  return window.innerWidth <= 600;
}
if (isMobileDevice()) {
  document.getElementById("gmailLink").textContent = "Gmail";
}