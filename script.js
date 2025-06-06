// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    // Close mobile menu if open
    closeMobileMenu()
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle("active")
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.remove("active")
}

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear()
  document.getElementById("currentYear").textContent = currentYear
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    closeMobileMenu()
  }
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
  }
})
