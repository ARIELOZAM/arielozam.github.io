"use strict";

// Navbar scroll animation toggle
(function () {
  var nav = document.querySelector('.stunning-nav');

  var toggleNavClass = function toggleNavClass() {
    if (!nav) return;
    var scrolled = window.scrollY > 24;
    nav.classList.toggle('nav-scrolled', scrolled);
  };

  toggleNavClass();
  window.addEventListener('scroll', toggleNavClass, {
    passive: true
  });
})();