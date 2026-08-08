/* =========================================================
   BissWert – app.js
   Enthält die komplette Interaktions-Logik der Startseite.
   Nutzt die Daten aus config.js (RESTAURANTS, PROVIDERS).
   ========================================================= */

(function () {
  "use strict";

  const state = {
    addressSet: false,
    address: "",
    activeProvider: "all", // all | lieferando | wolt | ubereats
    sortKey: "empfehlung", // empfehlung | zeit | gebuehr | bewertung
    query: "",
  };

  // ---------- DOM-Referenzen ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const addressForm = $("#address-form");
  const addressInput = $("#address-input");
  const addressPill = $("#address-pill");
  const addressPillText = $("#address-pill-text");
  const heroSearchTarget = $("#results");
  const resultsSection = $("#results-section");
  const emptyState = $("#empty-state");
  const resultsGrid = $("#restaurant-grid");
  const resultsMetaCount = $("#results-count");
  const filterChips = $$(".chip[data-provider]");
  const sortSelect = $("#sort-select");
  const searchInline = $("#inline-search");
  const toast = $("#toast");
  const cookieBanner = $("#cookie-banner");

  // ---------- Hilfsfunktionen ----------
  function euro(n) {
    if (n === 0) return "kostenlos";
    return n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function isPlaceholderLink(url) {
    return !url || url.includes("PASTE_AFFILIATE_LINK_HERE");
  }

  function bestOffer(offers) {
    // "Bester Preis" = niedrigste Liefergebühr, bei Gleichstand kürzeste Zeit
    return [...offers].sort((a, b) => {
      if (a.deliveryFeeEuro !== b.deliveryFeeEuro) return a.deliveryFeeEuro - b.deliveryFeeEuro;
      return a.deliveryTimeMin - b.deliveryTimeMin;
    })[0];
  }

  function sortOffers(offers) {
    return [...offers].sort((a, b) => a.deliveryFeeEuro - b.deliveryFeeEuro);
  }

  // ---------- Rendering ----------
  function renderChip(providerId, best) {
    const p = PROVIDERS[providerId];
    return `<span class="p-badge"><span class="dot" style="background:${p.color}"></span>${p.name}</span>`;
  }

  function renderOfferRow(restaurant, offer, isBest) {
    const p = PROVIDERS[offer.providerId];
    return `
      <div class="offer-row ${isBest ? "is-best" : ""}">
        <div class="offer-left">
          <span class="dot" style="background:${p.color}"></span>
          <div>
            <div class="offer-name">${p.name}</div>
            <div class="offer-meta">${offer.deliveryTimeMin} Min. · Lieferung ${euro(offer.deliveryFeeEuro)} · ab ${euro(offer.minOrderEuro)}</div>
          </div>
        </div>
        <button class="offer-go" data-restaurant="${restaurant.id}" data-provider="${offer.providerId}" data-url="${offer.affiliateUrl}">
          Öffnen
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </button>
      </div>`;
  }

  function renderCard(restaurant) {
    const offersFiltered =
      state.activeProvider === "all"
        ? restaurant.providers
        : restaurant.providers.filter((o) => o.providerId === state.activeProvider);

    if (offersFiltered.length === 0) return "";

    const sorted = sortOffers(offersFiltered);
    const best = bestOffer(restaurant.providers);
    const showBestBadge = state.activeProvider === "all";

    return `
      <article class="r-card">
        <div class="r-media" style="background:${restaurant.gradient}">
          ${showBestBadge ? `<span class="best-badge">Bester Preis: ${PROVIDERS[best.providerId].name}</span>` : ""}
          <button class="fav-btn" aria-label="Merken" title="Merken">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-10-9.2C.5 8 2.4 4.5 6 4c2.1-.3 3.9.8 6 3 2.1-2.2 3.9-3.3 6-3 3.6.5 5.5 4 4 7.8-2.5 4.6-10 9.2-10 9.2z"/></svg>
          </button>
          <span aria-hidden="true">${restaurant.emoji}</span>
        </div>
        <div class="r-body">
          <div class="r-top">
            <h3 class="r-name">${restaurant.name}</h3>
            <span class="r-rating"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9 4.4 18l1.4-6.2L1 7.5l6.4-.6z"/></svg>${restaurant.rating.toFixed(1)}</span>
          </div>
          <p class="r-cuisine">${restaurant.cuisine}</p>
          <div class="r-providers">${restaurant.providers.map((o) => renderChip(o.providerId)).join("")}</div>
          <div class="r-offers">
            ${sorted.map((o, i) => renderOfferRow(restaurant, o, i === 0)).join("")}
          </div>
        </div>
      </article>`;
  }

  function currentList() {
    let list = RESTAURANTS.filter((r) =>
      state.activeProvider === "all" ? true : r.providers.some((o) => o.providerId === state.activeProvider)
    );

    if (state.query.trim()) {
      const q = state.query.trim().toLowerCase();
      list = list.filter((r) => r.name.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q));
    }

    const cheapest = (r) => {
      const offers = state.activeProvider === "all" ? r.providers : r.providers.filter((o) => o.providerId === state.activeProvider);
      return Math.min(...offers.map((o) => o.deliveryFeeEuro));
    };
    const fastest = (r) => {
      const offers = state.activeProvider === "all" ? r.providers : r.providers.filter((o) => o.providerId === state.activeProvider);
      return Math.min(...offers.map((o) => o.deliveryTimeMin));
    };

    switch (state.sortKey) {
      case "zeit":
        list = [...list].sort((a, b) => fastest(a) - fastest(b));
        break;
      case "gebuehr":
        list = [...list].sort((a, b) => cheapest(a) - cheapest(b));
        break;
      case "bewertung":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => b.rating - a.rating || fastest(a) - fastest(b));
    }
    return list;
  }

  function render() {
    if (!state.addressSet) {
      emptyState.style.display = "";
      resultsGrid.style.display = "none";
      resultsMetaCount.textContent = "";
      return;
    }
    emptyState.style.display = "none";
    resultsGrid.style.display = "";

    const list = currentList();
    resultsMetaCount.textContent = `${list.length} Restaurant${list.length === 1 ? "" : "s"} gefunden`;

    if (list.length === 0) {
      resultsGrid.innerHTML = `<div class="no-results">Keine Restaurants für diesen Filter gefunden. Versuch einen anderen Anbieter oder Suchbegriff.</div>`;
      return;
    }
    resultsGrid.innerHTML = list.map(renderCard).join("");
  }

  // ---------- Events ----------
  addressForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = addressInput.value.trim();
    if (!value) {
      addressInput.focus();
      return;
    }
    state.address = value;
    state.addressSet = true;
    addressPillText.textContent = value;
    addressPill.classList.add("is-visible");
    render();
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  addressPill.addEventListener("click", () => {
    heroSearchTarget && window.scrollTo({ top: 0, behavior: "smooth" });
    addressInput.focus();
  });

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      state.activeProvider = chip.dataset.provider;
      render();
    });
  });

  sortSelect.addEventListener("change", () => {
    state.sortKey = sortSelect.value;
    render();
  });

  if (searchInline) {
    searchInline.addEventListener("input", () => {
      state.query = searchInline.value;
      render();
    });
  }

  resultsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".offer-go");
    if (!btn) return;
    const url = btn.dataset.url;
    if (isPlaceholderLink(url)) {
      showToast("Affiliate-Link für diesen Anbieter wurde noch nicht hinterlegt.");
      return;
    }
    window.open(url, "_blank", "noopener");
  });

  // ---------- Cookie-Banner ----------
  const COOKIE_KEY = "bisswert_cookie_consent";
  if (!localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => cookieBanner.classList.add("is-visible"), 600);
  }
  $("#cookie-accept")?.addEventListener("click", () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    cookieBanner.classList.remove("is-visible");
  });
  $("#cookie-necessary")?.addEventListener("click", () => {
    localStorage.setItem(COOKIE_KEY, "necessary-only");
    cookieBanner.classList.remove("is-visible");
  });

  // ---------- Init ----------
  render();
})();
