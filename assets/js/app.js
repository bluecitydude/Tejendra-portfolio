/**
 * Core Application Script for Tejendra Purohit Portfolio
 * Handles:
 * - Theme initialization (System preference default, localStorage persistence, toggle)
 * - Custom cursor glow
 * - Mobile navigation menu
 * - Email copy interaction with visual confirmation
 */

(function () {
  "use strict";

  // 1. Theme Management
  const THEME_KEY = "tejendra-portfolio-theme";

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}

    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      btn.setAttribute("aria-label", `Switch to ${theme === "light" ? "dark" : "light"} theme`);
      btn.innerHTML =
        theme === "light"
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    });
  }

  const initialTheme = getSavedTheme() || getSystemTheme();
  applyTheme(initialTheme);

  // Listen to system changes if user hasn't explicitly set preference
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (!getSavedTheme()) {
        applyTheme(e.matches ? "light" : "dark");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Re-apply to ensure any DOM icons are updated
    applyTheme(document.documentElement.getAttribute("data-theme") || initialTheme);

    // Theme Toggle Click Handler
    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        const next = current === "light" ? "dark" : "light";
        applyTheme(next);
      });
    });

    // 2. Cursor Glow Follower (Desktop only)
    if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const glow = document.createElement("div");
      glow.className = "cursor-glow";
      document.body.appendChild(glow);

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let currentX = mouseX;
      let currentY = mouseY;

      window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animateCursor() {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
      }
      requestAnimationFrame(animateCursor);
    }

    // 3. Mobile Navigation Drawer
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const mobileDrawer = document.getElementById("mobileNavDrawer");
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      mobileDrawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.remove("open");
          mobileToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }

    // 4. One-Click Copy Email Interaction
    document.querySelectorAll(".copy-email-trigger").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const email = btn.dataset.email || "tejendrapurohit555@gmail.com";
        try {
          await navigator.clipboard.writeText(email);
          const originalContent = btn.innerHTML;
          btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied to Clipboard!`;
          btn.classList.add("btn-copied");
          setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.remove("btn-copied");
          }, 2400);
        } catch (err) {
          window.location.href = `mailto:${email}`;
        }
      });
    });
  });

  window.applyPortfolioTheme = applyTheme;
})();
