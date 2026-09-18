(function () {
  "use strict";

  /* ============ HAMBURGER MENU OVERLAY ============ */

  var openBtn = document.getElementById("menuOpen");
  var closeBtn = document.getElementById("menuClose");
  var overlay = document.getElementById("menuOverlay");
  var menuLinks = overlay.querySelectorAll("[data-menu-link]");
  var lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    requestAnimationFrame(function () {
      overlay.classList.add("is-open");
    });
    openBtn.setAttribute("aria-expanded", "true");
    openBtn.classList.add("is-active");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeMenu() {
    overlay.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.classList.remove("is-active");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    window.setTimeout(function () {
      overlay.hidden = true;
    }, 400);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") {
      closeMenu();
      return;
    }
    if (e.key === "Tab") {
      var focusable = overlay.querySelectorAll("a[href], button");
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  openBtn.addEventListener("click", function () {
    overlay.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  closeBtn.addEventListener("click", closeMenu);

  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeMenu();
  });

  /* ============ HEADER SCROLL STATE ============ */

  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ============ SCROLL REVEAL (things pop up as you scroll) ============ */

  var revealEls = document.querySelectorAll(".reveal");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    // stagger items that share a parent (e.g. the photo strip, the feature list)
    var parentIndex = new Map();
    revealEls.forEach(function (el) {
      var parent = el.parentElement;
      var count = parentIndex.get(parent) || 0;
      el.style.setProperty("--reveal-delay", (count * 0.09) + "s");
      parentIndex.set(parent, count + 1);
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
