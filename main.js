/* =========================================================
   GLOBAL / PAGE UTILITIES
   ========================================================= */

console.log("main.js loaded");

/* Auto-updating year */
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =========================================================
   HEADER COMPACT ON SCROLL
   ========================================================= */

   const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("header--compact", window.scrollY > 120);
  });
}


/* =========================================================
   NAVIGATION (HAMBURGER MENU)
   ========================================================= */

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");

if (toggle && nav) {

  function closeMenu() {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (!isClickInsideNav && !isClickOnToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  /* =========================
     RESPONSIVE BREAKPOINT FIX
     ========================= */

  const mq = window.matchMedia("(min-width: 601px)");

  function handleBreakpointChange(e) {
    if (e.matches) {
      closeMenu();
    }
  }

  mq.addEventListener("change", handleBreakpointChange);
  handleBreakpointChange(mq);
}