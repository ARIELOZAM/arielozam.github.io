"use strict";

// Contact form handling
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function _callee(e) {
    var formData, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            formData = new FormData(contactForm);
            data = Object.fromEntries(formData.entries()); // You can implement your own form submission logic here
            // For example, sending to a backend API or email service
            // For now, we'll just show a success message

            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});

(function () {
  var steps = Array.from(document.querySelectorAll('.step'));
  var progressBar = document.querySelector('.progress-bar');
  var stepIndex = 0;
  var data = {
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    billing: '',
    services: [],
    current: '',
    message: '',
    agreeLegal: false
  };

  function setProgress() {
    var pct = Math.round(stepIndex / (steps.length - 1) * 100);
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', pct);
  }

  function showStep(i) {
    steps.forEach(function (s) {
      return s.classList.remove('active');
    });
    steps[i].classList.add('active');
    stepIndex = i;
    setProgress();
  }

  function validateStep(i) {
    switch (i) {
      case 0:
        {
          // Intro doesn't require validation
          return {
            ok: true
          };
        }

      case 1:
        {
          var v = document.getElementById('w_name').value.trim();
          if (!v) return {
            ok: false,
            msg: 'Por favor escribe tu nombre.'
          };
          data.name = v;
          return {
            ok: true
          };
        }

      case 2:
        {
          var _v = document.getElementById('w_email').value.trim();

          var re = /.+@.+\..+/i;
          if (!re.test(_v)) return {
            ok: false,
            msg: 'Correo inválido.'
          };
          data.email = _v;
          return {
            ok: true
          };
        }

      case 3:
        {
          var _v2 = document.getElementById('w_phone').value.trim();

          if (!_v2) return {
            ok: false,
            msg: 'Por favor agrega tu teléfono.'
          };
          data.phone = _v2;
          return {
            ok: true
          };
        }

      case 4:
        {
          var _v3 = document.getElementById('w_company').value.trim();

          if (!_v3) return {
            ok: false,
            msg: 'Escribe el nombre de tu negocio.'
          };
          data.company = _v3;
          return {
            ok: true
          };
        }

      case 5:
        {
          var _v4 = document.getElementById('w_website').value.trim();

          if (!_v4) return {
            ok: false,
            msg: 'Agrega tu sitio o escribe "No tengo".'
          };
          data.website = _v4;
          return {
            ok: true
          };
        }

      case 6:
        {
          var selected = document.querySelector('input[name="w_billing"]:checked');
          if (!selected) return {
            ok: false,
            msg: 'Selecciona tu tipo de facturación.'
          };
          data.billing = selected.value;
          return {
            ok: true
          };
        }

      case 7:
        {
          var actives = Array.from(document.querySelectorAll('#w_services .chip.active'));
          if (!actives.length) return {
            ok: false,
            msg: 'Selecciona al menos un servicio.'
          };
          data.services = actives.map(function (c) {
            return c.getAttribute('data-value');
          });
          return {
            ok: true
          };
        }

      case 8:
        {
          var _selected = document.querySelector('input[name="w_current"]:checked');

          if (!_selected) return {
            ok: false,
            msg: 'Selecciona una opción.'
          };
          data.current = _selected.value;
          return {
            ok: true
          };
        }

      case 9:
        {
          var _v5 = document.getElementById('w_message').value.trim();

          if (!_v5) return {
            ok: false,
            msg: 'Escribe un mensaje.'
          };
          data.message = _v5;
          return {
            ok: true
          };
        }

      case 10:
        {
          var agree = document.getElementById('w_legal').checked;
          if (!agree) return {
            ok: false,
            msg: 'Debes aceptar el aviso legal para continuar.'
          };
          data.agreeLegal = true;
          return {
            ok: true
          };
        }

      default:
        return {
          ok: true
        };
    }
  }

  function goNext() {
    var res = validateStep(stepIndex);

    if (!res.ok) {
      // pequeña vibración visual
      var el = steps[stepIndex];
      el.style.transform = 'translateX(2px)';
      setTimeout(function () {
        el.style.transform = 'translateX(0)';
      }, 140);
      return;
    }

    if (stepIndex < steps.length - 1) {
      showStep(stepIndex + 1);

      if (stepIndex === steps.length - 2) {
        // fill summary just before success step is shown
        var sum = document.getElementById('w_summary');
        sum.innerHTML = "\n              <div class=\"row g-3\">\n                <div class=\"col-12 col-md-6\"><strong>Nombre:</strong> ".concat(data.name, "</div>\n                <div class=\"col-12 col-md-6\"><strong>Correo:</strong> ").concat(data.email, "</div>\n                <div class=\"col-12 col-md-6\"><strong>Tel\xE9fono:</strong> ").concat(data.phone, "</div>\n                <div class=\"col-12 col-md-6\"><strong>Empresa:</strong> ").concat(data.company, "</div>\n                <div class=\"col-12 col-md-6\"><strong>Sitio web:</strong> ").concat(data.website, "</div>\n                <div class=\"col-12 col-md-6\"><strong>Facturaci\xF3n:</strong> ").concat(data.billing, "</div>\n                <div class=\"col-12 col-md-6\"><strong>Servicios:</strong> ").concat(data.services.join(', '), "</div>\n                <div class=\"col-12 col-md-6\"><strong>Actualmente:</strong> ").concat(data.current, "</div>\n                <div class=\"col-12\"><strong>Mensaje:</strong><br/>").concat(data.message, "</div>\n              </div>"); // Aquí podrías enviar a un endpoint
        // fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
        //   .catch(()=>{});
      }
    }
  }

  function goBack() {
    if (stepIndex > 0) showStep(stepIndex - 1);
  } // Bind nav buttons


  document.querySelectorAll('.btn-next').forEach(function (btn) {
    return btn.addEventListener('click', goNext);
  });
  document.querySelectorAll('.btn-back').forEach(function (btn) {
    return btn.addEventListener('click', goBack);
  }); // Keyboard: Typeform-like behavior
  // - Enter: advances to next step (within wizard only)
  // - Shift+Enter: allows newline in textarea
  // - Escape: goes back

  document.addEventListener('keydown', function (e) {
    var inWizard = e.target.closest('.wizard-shell');
    if (!inWizard) return;

    if (e.key === 'Enter') {
      var active = document.querySelector('.step.active');
      var textarea = active ? active.querySelector('textarea') : null;

      if (textarea) {
        if (e.shiftKey) return; // allow newline

        e.preventDefault();
        goNext();
      } else {
        e.preventDefault();
        goNext();
      }
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      goBack();
    }
  }); // Chips selection (multiselect)

  document.querySelectorAll('#w_services .chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      chip.classList.toggle('active');
    });
  }); // Initialize

  showStep(0);
})();