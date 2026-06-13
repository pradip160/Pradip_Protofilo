// Update the footer year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();

// Profile photo path: replace the file at assets/profile-photo.jpg with your real photo.
// If that file is missing or broken, the page shows the clean "PM" initials placeholder.
// If you previously uploaded a photo in this browser, it will still be shown from local storage.
const profilePhoto = document.querySelector("#profilePhoto");
const savedPhoto = localStorage.getItem("portfolioProfilePhoto");

if (profilePhoto) {
  if (savedPhoto) {
    profilePhoto.src = savedPhoto;
    profilePhoto.classList.remove("is-hidden");
  }

  profilePhoto.addEventListener("error", () => {
    profilePhoto.classList.add("is-hidden");
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Mobile menu toggle for smaller screens.
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Simple accessible accordion for the IT Support Knowledge Base.
document.querySelectorAll(".accordion-trigger").forEach((trigger, index) => {
  const item = trigger.closest(".accordion-item");
  const panel = item.querySelector(".accordion-panel");
  const panelId = `support-panel-${index + 1}`;

  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", panelId);
  panel.setAttribute("id", panelId);

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

// The contact form uses mailto, so it works without a backend server.
document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:pradipmainai5@gmail.com?subject=${subject}&body=${body}`;
});
