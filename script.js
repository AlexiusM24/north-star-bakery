document.addEventListener("DOMContentLoaded", () => {
const themeButton = document.getElementById("theme-toggle");

if (!themeButton) return;

themeButton.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");

const darkMode = document.body.classList.contains("dark-mode");

themeButton.textContent = darkMode
? "☀️ Switch to Light Mode"
: "🌙 Toggle Dark Mode";
});
});
