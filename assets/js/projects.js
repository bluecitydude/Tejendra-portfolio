/**
 * Projects Filtering & Grid Renderer Engine
 * Powers dual-axis filtering (Category + Technology stack conjunction)
 * Automatically derives filters and counts from window.PORTFOLIO_PROJECTS.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("projectsGrid");
    const categoryContainer = document.getElementById("categoryFilters");
    const techContainer = document.getElementById("techFilters");
    const activeCountEl = document.getElementById("activeProjectCount");
    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    const emptyStateEl = document.getElementById("filterEmptyState");

    if (!gridContainer || !window.PORTFOLIO_PROJECTS) return;

    let selectedCategory = "All";
    let selectedTech = "All";

    const projects = window.PORTFOLIO_PROJECTS;

    // Determine all unique categories and technologies
    const allCategories = new Set(["All"]);
    const allTechs = new Set(["All"]);

    projects.forEach((p) => {
      p.categories.forEach((c) => allCategories.add(c));
      p.techStack.forEach((t) => allTechs.add(t));
    });

    // Populate Category Pills
    if (categoryContainer) {
      categoryContainer.innerHTML = "";
      allCategories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.className = `filter-pill ${cat === selectedCategory ? "active" : ""}`;
        btn.dataset.category = cat;
        btn.textContent = cat;
        btn.addEventListener("click", () => {
          selectedCategory = cat;
          updateFilterPills();
          renderFilteredProjects();
        });
        categoryContainer.appendChild(btn);
      });
    }

    // Populate Technology Pills
    if (techContainer) {
      techContainer.innerHTML = "";
      allTechs.forEach((tech) => {
        const btn = document.createElement("button");
        btn.className = `filter-pill ${tech === selectedTech ? "active" : ""}`;
        btn.dataset.tech = tech;
        btn.textContent = tech;
        btn.addEventListener("click", () => {
          selectedTech = tech;
          updateFilterPills();
          renderFilteredProjects();
        });
        techContainer.appendChild(btn);
      });
    }

    function updateFilterPills() {
      if (categoryContainer) {
        categoryContainer.querySelectorAll(".filter-pill").forEach((btn) => {
          if (btn.dataset.category === selectedCategory) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
      if (techContainer) {
        techContainer.querySelectorAll(".filter-pill").forEach((btn) => {
          if (btn.dataset.tech === selectedTech) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    }

    function renderFilteredProjects() {
      const filtered = projects.filter((p) => {
        const matchCategory = selectedCategory === "All" || p.categories.includes(selectedCategory);
        const matchTech = selectedTech === "All" || p.techStack.includes(selectedTech);
        return matchCategory && matchTech;
      });

      if (activeCountEl) {
        activeCountEl.textContent = `Showing ${filtered.length} of ${projects.length} projects`;
      }

      gridContainer.innerHTML = "";

      if (filtered.length === 0) {
        if (emptyStateEl) emptyStateEl.style.display = "block";
      } else {
        if (emptyStateEl) emptyStateEl.style.display = "none";

        filtered.forEach((p) => {
          const card = document.createElement("article");
          card.className = "project-card";
          card.innerHTML = `
            <div class="card-thumbnail-wrap">
              <img src="${p.thumbnail}" alt="${p.title} preview illustration" loading="lazy" />
            </div>
            <div class="card-body">
              <div class="project-meta-bar">
                <span class="project-category-tag">${p.categories[0]}</span>
                ${p.featured ? `<span class="badge badge-accent">Featured</span>` : ""}
              </div>
              <h3 class="card-title">${p.title}</h3>
              <p class="card-desc">${p.shortDescription}</p>
              <div class="tech-badges-list">
                ${p.techStack.map((t) => `<span class="badge">${t}</span>`).join("")}
              </div>
              <div class="card-footer">
                <a href="${p.caseStudyUrl}" class="btn btn-secondary btn-sm">Case Study &rarr;</a>
                <div class="card-links">
                  ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" title="Live Demo">Live &nearr;</a>` : ""}
                  <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" title="GitHub Source">GitHub &nearr;</a>
                </div>
              </div>
            </div>
          `;
          gridContainer.appendChild(card);
        });
      }
    }

    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => {
        selectedCategory = "All";
        selectedTech = "All";
        updateFilterPills();
        renderFilteredProjects();
      });
    }

    // Initial render
    renderFilteredProjects();
  });
})();
