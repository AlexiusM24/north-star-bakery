document.addEventListener("DOMContentLoaded", () => {
// Highlight the current page in the navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {
const linkPage = link.getAttribute("href");

if (linkPage === currentPage) {
link.classList.add("active-page");
link.setAttribute("aria-current", "page");
}
});

// Fade in the page content
const mainContent = document.querySelector("main");

if (mainContent) {
mainContent.classList.add("page-loaded");
}
});
document.addEventListener("DOMContentLoaded", () => {
// Interactive bakery navigation
const nav = document.querySelector("nav");
const menuButton = document.querySelector(".menu-toggle");

if (nav && menuButton) {
menuButton.addEventListener("click", () => {
nav.classList.toggle("active");
});
}

// Interactive bakery items using your existing articles
document.querySelectorAll("article").forEach(article => {
article.style.cursor = "pointer";

article.addEventListener("click", () => {
article.classList.toggle("selected");
});
});

// Smooth scrolling for page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", event => {
const target = document.querySelector(
link.getAttribute("href")
);

if (target) {
event.preventDefault();
target.scrollIntoView({
behavior: "smooth",
block: "start"
});
}
});
});

// Button interaction
document.querySelectorAll("button").forEach(button => {
button.addEventListener("click", () => {
button.classList.add("clicked");

setTimeout(() => {
button.classList.remove("clicked");
}, 250);
});
});

// Add a live welcome message to the browser console
console.log("Welcome to North Star Bakery!");
});

