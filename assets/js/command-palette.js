/**
 * Developer Command Palette (Ctrl+K / Cmd+K)
 * Full keyboard navigation (Arrows, Enter, Escape), instant search filter,
 * and quick actions for recruiters and developers.
 */

(function () {
  "use strict";

  const COMMANDS = [
    {
      group: "Navigation",
      title: "Go to Home",
      category: "Page",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      action: () => navigateTo("index.html")
    },
    {
      group: "Navigation",
      title: "View All Projects & Filter",
      category: "Page",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      action: () => navigateTo("projects.html")
    },
    {
      group: "Projects Case Studies",
      title: "SecretLetter (Headless PHP / Cryptography)",
      category: "Case Study",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      action: () => navigateTo("projects/secretletter.html")
    },
    {
      group: "Projects Case Studies",
      title: "Elyra (Mental Wellness / PHP MVC)",
      category: "Case Study",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      action: () => navigateTo("projects/elyra.html")
    },
    {
      group: "Projects Case Studies",
      title: "Zen Master (Interactive Patience App)",
      category: "Case Study",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      action: () => navigateTo("projects/zen-master.html")
    },
    {
      group: "Navigation",
      title: "About Tejendra",
      category: "Page",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
      action: () => navigateTo("about.html")
    },
    {
      group: "Navigation",
      title: "Work Experience & Internship",
      category: "Page",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      action: () => navigateTo("about.html#experience")
    },
    {
      group: "Recruiter Actions",
      title: "Download Full-Stack Developer Resume (Recommended)",
      category: "Download",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
      action: () => downloadResume("Tejendra_Purohit_Full_Stack_Developer.pdf")
    },
    {
      group: "Recruiter Actions",
      title: "Download Backend Developer Resume",
      category: "Download",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
      action: () => downloadResume("Tejendra_Purohit_Backend_Developer.pdf")
    },
    {
      group: "Recruiter Actions",
      title: "Open Resume Selection Center",
      category: "Page",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      action: () => navigateTo("resume.html")
    },
    {
      group: "Direct Links",
      title: "GitHub Profile (@bluecitydude)",
      category: "External",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
      action: () => window.open("https://github.com/bluecitydude", "_blank")
    },
    {
      group: "Direct Links",
      title: "LinkedIn Profile",
      category: "External",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      action: () => window.open("https://www.linkedin.com/in/tejendra-purohit-14b753311/", "_blank")
    },
    {
      group: "Direct Links",
      title: "Email Tejendra (tejendrapurohit555@gmail.com)",
      category: "Action",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
      action: () => (window.location.href = "mailto:tejendrapurohit555@gmail.com")
    },
    {
      group: "Preferences",
      title: "Toggle Light / Dark Theme",
      category: "Action",
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line></svg>`,
      action: () => {
        const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        if (window.applyPortfolioTheme) window.applyPortfolioTheme(cur === "light" ? "dark" : "light");
      }
    }
  ];

  function getBasePath() {
    // Check if we are inside a subfolder (e.g. /projects/)
    const path = window.location.pathname;
    if (path.includes("/projects/")) {
      return "../";
    }
    return "./";
  }

  function navigateTo(target) {
    const base = getBasePath();
    window.location.href = `${base}${target}`;
  }

  function downloadResume(filename) {
    const base = getBasePath();
    const link = document.createElement("a");
    link.href = `${base}assets/Resumes/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Build Command Palette DOM
  function createPaletteDOM() {
    const backdrop = document.createElement("div");
    backdrop.className = "cmd-palette-backdrop";
    backdrop.id = "commandPaletteBackdrop";
    backdrop.innerHTML = `
      <div class="cmd-palette-modal" role="dialog" aria-modal="true" aria-label="Command Palette">
        <div class="cmd-search-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-tertiary)"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="cmd-search-input" id="cmdPaletteInput" placeholder="Type a command or search pages..." autocomplete="off" />
          <span class="badge">ESC to close</span>
        </div>
        <div class="cmd-list" id="cmdPaletteList"></div>
        <div class="cmd-footer">
          <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd></span>
          <span>Select with <kbd>↵ Enter</kbd></span>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    return backdrop;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const backdrop = createPaletteDOM();
    const input = document.getElementById("cmdPaletteInput");
    const list = document.getElementById("cmdPaletteList");
    let selectedIndex = 0;
    let filteredCommands = [...COMMANDS];

    function renderList() {
      list.innerHTML = "";
      if (filteredCommands.length === 0) {
        list.innerHTML = `<div style="padding:2rem;text-align:center;color:var(--text-tertiary);font-size:0.95rem">No matching commands found.</div>`;
        return;
      }

      let currentGroup = "";
      filteredCommands.forEach((cmd, idx) => {
        if (cmd.group !== currentGroup) {
          currentGroup = cmd.group;
          const groupTitle = document.createElement("div");
          groupTitle.className = "cmd-group-title";
          groupTitle.textContent = currentGroup;
          list.appendChild(groupTitle);
        }

        const item = document.createElement("div");
        item.className = `cmd-item ${idx === selectedIndex ? "selected" : ""}`;
        item.innerHTML = `
          <div class="cmd-item-label">
            <span style="color:var(--accent)">${cmd.icon}</span>
            <span>${cmd.title}</span>
          </div>
          <span class="badge" style="font-size:0.7rem">${cmd.category}</span>
        `;
        item.addEventListener("click", () => {
          closePalette();
          cmd.action();
        });
        item.addEventListener("mouseenter", () => {
          selectedIndex = idx;
          updateSelectionHighlight();
        });
        list.appendChild(item);
      });
    }

    function updateSelectionHighlight() {
      const items = list.querySelectorAll(".cmd-item");
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add("selected");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("selected");
        }
      });
    }

    function openPalette() {
      backdrop.classList.add("open");
      input.value = "";
      filteredCommands = [...COMMANDS];
      selectedIndex = 0;
      renderList();
      setTimeout(() => input.focus(), 50);
      document.body.style.overflow = "hidden";
    }

    function closePalette() {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }

    // Trigger buttons on header
    document.querySelectorAll(".cmd-k-btn").forEach((btn) => {
      btn.addEventListener("click", openPalette);
    });

    // Keyboard Shortcuts: Ctrl+K / Cmd+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (backdrop.classList.contains("open")) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === "Escape" && backdrop.classList.contains("open")) {
        closePalette();
      } else if (backdrop.classList.contains("open")) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (filteredCommands.length > 0) {
            selectedIndex = (selectedIndex + 1) % filteredCommands.length;
            updateSelectionHighlight();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (filteredCommands.length > 0) {
            selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
            updateSelectionHighlight();
          }
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            closePalette();
            filteredCommands[selectedIndex].action();
          }
        }
      }
    });

    // Close on backdrop click
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closePalette();
      }
    });

    // Search filter input
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      filteredCommands = COMMANDS.filter((cmd) => {
        return (
          cmd.title.toLowerCase().includes(q) ||
          cmd.group.toLowerCase().includes(q) ||
          cmd.category.toLowerCase().includes(q)
        );
      });
      selectedIndex = 0;
      renderList();
    });
  });
})();
