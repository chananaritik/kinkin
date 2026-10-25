(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const searchInput = document.querySelector("#product-search");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const productCards = [...document.querySelectorAll(".product-card")];
  const resultsStatus = document.querySelector("#results-status");
  const emptyState = document.querySelector("#empty-state");
  let activeFilter = "all";

  function updateCatalogue() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
      const categoryMatches = activeFilter === "all" || card.dataset.category === activeFilter;
      const searchText = `${card.dataset.search || ""} ${card.querySelector("h3")?.textContent || ""}`.toLowerCase();
      const searchMatches = !query || searchText.includes(query);
      const isVisible = categoryMatches && searchMatches;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (resultsStatus) {
      resultsStatus.textContent = visibleCount === productCards.length && activeFilter === "all" && !query
        ? "Showing all product categories"
        : `Showing ${visibleCount} of ${productCards.length} product categories`;
    }
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      updateCatalogue();
    });
  });

  if (searchInput) searchInput.addEventListener("input", updateCatalogue);

  const phone = "919999505851";
  document.querySelectorAll(".enquiry-link").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.dataset.product || "a product";
      const message = `Hello Kin Kin Paints & Hardware Store, I'd like to enquire about ${product}. Please share availability and pricing.`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
