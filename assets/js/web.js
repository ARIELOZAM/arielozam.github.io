// Datos de los servicios (puedes cargarlos desde una API)
const servicesData = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: "fa-code",
        description: "Creación de aplicaciones web modernas con las últimas tecnologías",
        image: "https://source.unsplash.com/random/800x600?webdevelopment",
        features: [
            "React/Next.js",
            "Node.js & Express",
            "Bases de datos SQL/NoSQL",
            "Autenticación JWT"
        ],
        technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
        caseStudy: {
            client: "Tech Corp",
            result: "+300% rendimiento"
        }
    },
    {
        id: 2,
        title: "Marketing Digital",
        icon: "fa-chart-line",
        description: "Estrategias integrales de marketing digital",
        image: "https://source.unsplash.com/random/800x600?marketing",
        features: [
            "SEO Avanzado",
            "Campañas PPC",
            "Analítica Web",
            "Automatización"
        ],
        technologies: ["Google Ads", "Google Analytics", "HubSpot"],
        caseStudy: {
            client: "StartupX",
            result: "+150% leads"
        }
    },{
        id: 3,
        title: "Desarrollo e-Commerce",
        icon: "fa-cart-line",
        description: "Desarrollo de tu tienda en línea",
        image: "https://source.unsplash.com/random/800x600?marketing",
        features: [
            "SEO Avanzado",
            "Campañas PPC",
            "Analítica Web",
            "Automatización"
        ],
        technologies: ["Google Ads", "Google Analytics", "HubSpot"],
        caseStudy: {
            client: "StartupX",
            result: "+150% leads"
        }
    }
];

// Función para renderizar servicios
function renderServices() {
    const container = document.getElementById('servicesContainer');
    const template = document.getElementById('serviceTemplate');

    servicesData.forEach(service => {
        const clone = template.content.cloneNode(true);
        
        // Llenar datos
        clone.querySelector('[data-icon]').classList.add(service.icon);
        clone.querySelector('[data-title]').textContent = service.title;
        clone.querySelector('[data-description]').textContent = service.description;
        clone.querySelector('[data-modal-toggle]').dataset.serviceId = service.id;
        
        // Evento para abrir modal
        clone.querySelector('[data-modal-toggle]').addEventListener('click', () => {
            openServiceModal(service);
            console.log('Modal abierto'); // Agrega este log para verificar que se está llamando a la función
        });

        container.appendChild(clone);
    });
}

// Función para abrir modal con datos del servicio
function openServiceModal(service) {
    // Actualizar contenido del modal
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalImage').src = service.image;
    document.getElementById('modalFeatures').innerHTML = service.features
        .map(feature => `<li>${feature}</li>`).join('');
    document.getElementById('modalTech').innerHTML = service.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Actualizar caso de estudio
    const caseStudySection = document.getElementById('caseStudy');
    if(service.caseStudy) {
        caseStudySection.innerHTML = `
            <h4>Caso de Éxito</h4>
            <p class="stat">${service.caseStudy.result}</p>
            <p class="client">${service.caseStudy.client}</p>
        `;
        caseStudySection.style.display = 'block';
    } else {
        caseStudySection.style.display = 'none';
    }

    // Mostrar modal
    new bootstrap.Modal(document.getElementById('serviceModal')).show();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderServices);


  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Swiper
const portfolioSwiper = new Swiper('.portfolioSwiper', {
    loop: true,
    slidesPerView: 1, // Show only one slide at a time
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next', // Add navigation arrows
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.portfolio-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 40
        }
    }
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formContent = document.getElementById('formContent');
    const successMessage = document.getElementById('successMessage');
    const resetFormButton = document.getElementById('resetForm');
    const successCheckmark = document.querySelector('.success-checkmark');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission (replace with actual form submission)
        formContent.style.display = 'none';
        successMessage.style.display = 'block';
        successCheckmark.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
    });
    
    resetFormButton.addEventListener('click', function() {
        contactForm.reset();
        successMessage.style.display = 'none';
        formContent.style.display = 'block';
    });
    
    // Floating label animation for select element
    const selectElement = document.querySelector('select.form-control');
    selectElement.addEventListener('change', function() {
        if (this.value !== '') {
            this.setAttribute('data-selected', 'true');
        } else {
            this.removeAttribute('data-selected');
        }
    });
});

  // Animación del hamburguesa
const hamburger = document.querySelector('.hamburger-tech');
const navbar = document.querySelector('.tech-nav');

hamburger.addEventListener('click', function() {
this.classList.toggle('active');
});

// Efecto scroll
window.addEventListener('scroll', function() {
if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});