// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // You can implement your own form submission logic here
        // For example, sending to a backend API or email service
        
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});

 (function(){
      const steps = Array.from(document.querySelectorAll('.step'));
      const progressBar = document.querySelector('.progress-bar');
      let stepIndex = 0;
      const data = {
        name: '', email: '', phone: '', company: '', website: '', billing: '',
        services: [], current: '', message: '', agreeLegal: false
      };

      function setProgress() {
        const pct = Math.round((stepIndex) / (steps.length - 1) * 100);
        progressBar.style.width = pct + '%';
        progressBar.setAttribute('aria-valuenow', pct);
      }
      function showStep(i) {
        steps.forEach(s => s.classList.remove('active'));
        steps[i].classList.add('active');
        stepIndex = i;
        setProgress();
      }
      function validateStep(i) {
        switch (i) {
          case 0: {
            // Intro doesn't require validation
            return { ok: true };
          }
          case 1: {
            const v = document.getElementById('w_name').value.trim();
            if (!v) return { ok:false, msg:'Por favor escribe tu nombre.' };
            data.name = v; return { ok:true };
          }
          case 2: {
            const v = document.getElementById('w_email').value.trim();
            const re = /.+@.+\..+/i;
            if (!re.test(v)) return { ok:false, msg:'Correo inválido.' };
            data.email = v; return { ok:true };
          }
          case 3: {
            const v = document.getElementById('w_phone').value.trim();
            if (!v) return { ok:false, msg:'Por favor agrega tu teléfono.' };
            data.phone = v; return { ok:true };
          }
          case 4: {
            const v = document.getElementById('w_company').value.trim();
            if (!v) return { ok:false, msg:'Escribe el nombre de tu negocio.' };
            data.company = v; return { ok:true };
          }
          case 5: {
            const v = document.getElementById('w_website').value.trim();
            if (!v) return { ok:false, msg:'Agrega tu sitio o escribe "No tengo".' };
            data.website = v; return { ok:true };
          }
          case 6: {
            const selected = document.querySelector('input[name="w_billing"]:checked');
            if (!selected) return { ok:false, msg:'Selecciona tu tipo de facturación.' };
            data.billing = selected.value; return { ok:true };
          }
          case 7: {
            const actives = Array.from(document.querySelectorAll('#w_services .chip.active'));
            if (!actives.length) return { ok:false, msg:'Selecciona al menos un servicio.' };
            data.services = actives.map(c => c.getAttribute('data-value'));
            return { ok:true };
          }
          case 8: {
            const selected = document.querySelector('input[name="w_current"]:checked');
            if (!selected) return { ok:false, msg:'Selecciona una opción.' };
            data.current = selected.value; return { ok:true };
          }
          case 9: {
            const v = document.getElementById('w_message').value.trim();
            if (!v) return { ok:false, msg:'Escribe un mensaje.' };
            data.message = v; return { ok:true };
          }
          case 10: {
            const agree = document.getElementById('w_legal').checked;
            if (!agree) return { ok:false, msg:'Debes aceptar el aviso legal para continuar.' };
            data.agreeLegal = true; return { ok:true };
          }
          default: return { ok:true };
        }
      }
      function goNext() {
        const res = validateStep(stepIndex);
        if (!res.ok) {
          // pequeña vibración visual
          const el = steps[stepIndex];
          el.style.transform = 'translateX(2px)';
          setTimeout(()=>{ el.style.transform = 'translateX(0)'; }, 140);
          return;
        }
        if (stepIndex < steps.length - 1) {
          showStep(stepIndex + 1);
          if (stepIndex === steps.length - 2) {
            // fill summary just before success step is shown
            const sum = document.getElementById('w_summary');
            sum.innerHTML = `
              <div class="row g-3">
                <div class="col-12 col-md-6"><strong>Nombre:</strong> ${data.name}</div>
                <div class="col-12 col-md-6"><strong>Correo:</strong> ${data.email}</div>
                <div class="col-12 col-md-6"><strong>Teléfono:</strong> ${data.phone}</div>
                <div class="col-12 col-md-6"><strong>Empresa:</strong> ${data.company}</div>
                <div class="col-12 col-md-6"><strong>Sitio web:</strong> ${data.website}</div>
                <div class="col-12 col-md-6"><strong>Facturación:</strong> ${data.billing}</div>
                <div class="col-12 col-md-6"><strong>Servicios:</strong> ${data.services.join(', ')}</div>
                <div class="col-12 col-md-6"><strong>Actualmente:</strong> ${data.current}</div>
                <div class="col-12"><strong>Mensaje:</strong><br/>${data.message}</div>
              </div>`;
            // Aquí podrías enviar a un endpoint
            // fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
            //   .catch(()=>{});
          }
        }
      }
      function goBack() {
        if (stepIndex > 0) showStep(stepIndex - 1);
      }

      // Bind nav buttons
      document.querySelectorAll('.btn-next').forEach(btn => btn.addEventListener('click', goNext));
      document.querySelectorAll('.btn-back').forEach(btn => btn.addEventListener('click', goBack));

      // Keyboard: Typeform-like behavior
      // - Enter: advances to next step (within wizard only)
      // - Shift+Enter: allows newline in textarea
      // - Escape: goes back
      document.addEventListener('keydown', (e) => {
        const inWizard = e.target.closest('.wizard-shell');
        if (!inWizard) return;
        if (e.key === 'Enter') {
          const active = document.querySelector('.step.active');
          const textarea = active ? active.querySelector('textarea') : null;
          if (textarea) {
            if (e.shiftKey) return; // allow newline
            e.preventDefault();
            goNext();
          } else {
            e.preventDefault();
            goNext();
          }
        }
        if (e.key === 'Escape') { e.preventDefault(); goBack(); }
      });

      // Chips selection (multiselect)
      document.querySelectorAll('#w_services .chip').forEach(chip => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('active');
        });
      });

      // Initialize
      showStep(0);
    })();