
      // Navbar scroll animation toggle
      (function() {
        const nav = document.querySelector('.stunning-nav');
        const toggleNavClass = () => {
          if (!nav) return;
          const scrolled = window.scrollY > 24;
          nav.classList.toggle('nav-scrolled', scrolled);
        };
        toggleNavClass();
        window.addEventListener('scroll', toggleNavClass, { passive: true });
      })();
