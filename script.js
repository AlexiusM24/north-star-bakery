
document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation toggle
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("active");
        });
    }

    // Interactive bakery products
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", () => {
            product.classList.toggle("selected");
        });
    });

    // Add to cart functionality
    let cartCount = 0;
    const cartDisplay = document.querySelector("#cart-count");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            cartCount++;

            if (cartDisplay) {
                cartDisplay.textContent = cartCount;
            }

            button.textContent = "Added! ✓";

            setTimeout(() => {
                button.textContent = "Add to Cart";
            }, 1500);
        });
    });

    // Interactive welcome button
    const welcomeButton = document.querySelector("#welcomeButton");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", () => {
            alert("Welcome to North Star Bakery! Freshly baked with love! 🥐");
        });
    }

    // Bakery search
    const searchInput = document.querySelector("#product-search");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();

            document.querySelectorAll(".product").forEach(product => {
                product.style.display = product.textContent
                    .toLowerCase()
                    .includes(searchTerm) ? "" : "none";
            });
        });
    }

    // Dark mode toggle
    const themeButton = document.querySelector("#theme-toggle");

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            themeButton.textContent = document.body.classList.contains("dark-mode")
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";
        });
    }

    // Back to top button
    const topButton = document.querySelector("#back-to-top");

    if (topButton) {
        topButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Newsletter subscription
    const newsletterForm = document.querySelector("#newsletter-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", event => {
            event.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');

            if (emailInput && emailInput.value.trim()) {
                alert("Thank you for your interest in North Star Bakery!");
                newsletterForm.reset();
            }
        });
    }

    // Automatically update footer year
    const yearDisplay = document.querySelector("#year");

    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }
});
