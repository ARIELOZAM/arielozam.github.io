// Datos de los servicios (puedes cargarlos desde una API)
const servicesData = [
    {
        id: 1,
        title: "Desarrollo Web Avanzado",
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

// Validación de formulario
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Aquí puedes agregar más validaciones si es necesario
    return true;
}

// Airtable API Connection
function sendToAirtable() {
    var Airtable = require('airtable');
var base = new Airtable({apiKey: 'patjIbVzegCTHLU9B.2f9e05530c0953c3828ffd16fb1863ac8f757077c97d9227731e942a933782f4'}).base('appgkauBNiPlm5vV4');

base('Formulario ARIELOZAM').create([
    {
        "fields": {
        "Nombre": document.getElementById('firstName').value + " " + document.getElementById('lastName').value,
        "Telefono": document.getElementById('phone').value,
        "Correo": document.getElementById('email').value,
        "Asunto": document.getElementById('subject').value,
        "Mensaje": document.getElementById('message').value,
        "Newsletter": document.getElementById('newsletter').checked == true,
        }
    }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
}