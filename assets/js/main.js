/* Portfolio Mathias Celle — scripts communs (sans dépendance, ~3 Ko) */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---- Thème clair / sombre ---- */
  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  var saved = storedTheme();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  var themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      }
      var next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* stockage indisponible */ }
    });
  }

  /* ---- Menu mobile ---- */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });
  }

  /* ---- Sommaire actif (fiches projet) ---- */
  var tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          tocLinks.forEach(function (a) { a.classList.remove("is-active"); });
          map[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* ---- Visionneuse d'illustrations ---- */
  var lastFocus = null;
  function closeLightbox(box) {
    box.remove();
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll(".gallery button, .cover button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var img = btn.querySelector("img");
      var cap = btn.closest("figure").querySelector("figcaption");
      lastFocus = btn;
      var box = document.createElement("div");
      box.className = "lightbox";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");
      box.setAttribute("aria-label", "Illustration agrandie");
      box.innerHTML =
        '<button class="icon-btn" type="button" aria-label="Fermer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
        '<div><img alt=""><p></p></div>';
      box.querySelector("img").src = img.src;
      box.querySelector("img").alt = img.alt;
      box.querySelector("p").textContent = cap ? cap.textContent : "";
      document.body.appendChild(box);
      document.body.style.overflow = "hidden";
      var close = box.querySelector("button");
      close.focus();
      close.addEventListener("click", function () { closeLightbox(box); });
      box.addEventListener("click", function (e) { if (e.target === box) closeLightbox(box); });
      box.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox(box);
        if (e.key === "Tab") { e.preventDefault(); close.focus(); }
      });
    });
  });

  /* ---- Formulaire de contact (Web3Forms) ---- */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var label = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = "Envoi en cours…";
      status.hidden = true;
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (!data.success) throw new Error(data.message || "Échec");
          status.className = "form-status ok";
          status.textContent = "Message envoyé. Je vous réponds sous 48 h.";
          form.reset();
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent = "Le message n'est pas parti. Vérifiez votre connexion, ou écrivez-moi via LinkedIn.";
        })
        .finally(function () {
          status.hidden = false;
          btn.disabled = false;
          btn.innerHTML = label;
        });
    });
  }

  /* ---- Année du pied de page ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
