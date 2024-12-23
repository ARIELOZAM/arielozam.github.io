// Crear el contenedor principal del navbar
const navBar = document.createElement('nav');
navBar.className = 'navbar navbar-expand-lg text-bg-dark fixed-top';
navBar.style.zIndex = '9999';

// Crear el contenedor interno (container-fluid)
const containerFluid = document.createElement('div');
containerFluid.className = 'container';

// Crear el logo/marca
const brandLink = document.createElement('a');
brandLink.className = 'navbar-brand';
brandLink.href = '#';

const brandTitle = document.createElement('h3');
brandTitle.className = 'text-white';
brandTitle.innerText = 'ARIELOZAM';

brandLink.appendChild(brandTitle);

// Botón de toggler (para pantallas pequeñas)
const togglerButton = document.createElement('button');
togglerButton.className = 'navbar-toggler text-white';
togglerButton.type = 'button';
togglerButton.setAttribute('data-bs-toggle', 'collapse');
togglerButton.setAttribute('data-bs-target', '#navbarSupportedContent');
togglerButton.setAttribute('aria-controls', 'navbarSupportedContent');
togglerButton.setAttribute('aria-expanded', 'false');
togglerButton.setAttribute('aria-label', 'Toggle navigation');

const togglerIcon = document.createElement('i');
togglerIcon.className = 'fa fa-bars';

togglerButton.appendChild(togglerIcon);

// Contenedor del contenido colapsable
const collapseDiv = document.createElement('div');
collapseDiv.className = 'collapse navbar-collapse text-sm-center';
collapseDiv.id = 'navbarSupportedContent';

// Crear lista de navegación
const navList = document.createElement('ul');
navList.className = 'navbar-nav ms-auto mb-2 mb-lg-0';

// Crear los elementos de la lista
const navItems = [
  { href: '#header', text: 'Home', class: 'nav-link' },
  { href: '#projects', text: 'Projects', class: 'nav-link' },

  {
    href: './assets/files/arielozam-updated-resume-24.pdf',
    text: 'Download Resume',
    class: 'btn btn-light',
    download: true
  }
];

// Generar los <li> y los <a> dentro de la lista de navegación
navItems.forEach(item => {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const a = document.createElement('a');
  a.href = item.href;
  a.innerText = item.text;
  a.className = item.class;

  if (item.download) {
    a.setAttribute('download', '');
  }

  li.appendChild(a);
  navList.appendChild(li);
});

// Añadir lista al contenedor colapsable
collapseDiv.appendChild(navList);

// Añadir todos los elementos al contenedor principal
containerFluid.appendChild(brandLink);
containerFluid.appendChild(togglerButton);
containerFluid.appendChild(collapseDiv);

// Añadir container-fluid al navbar
navBar.appendChild(containerFluid);

// Insertar el navbar en el elemento con id #nav
document.getElementById('nav').appendChild(navBar);

// Crear el contenedor principal del footer
const footer = document.createElement('footer');
footer.className = 'cb-footer cb-footer-fixed cb-footer-h-50';

// Crear el contenedor interno (container)
const container = document.createElement('div');
container.className = 'container';

// Crear el row
const row = document.createElement('div');
row.className = 'row';

// Crear la columna centrada
const col = document.createElement('div');
col.className = 'col-md-8 mx-auto';

// Crear el div con el texto centrado
const textCenter = document.createElement('div');
textCenter.className = 'text-center';
textCenter.innerHTML = 'Sitio Desarrollado por ARIELOZAM &copy; 2024';

// Añadir el texto centrado a la columna
col.appendChild(textCenter);

// Añadir la columna al row
row.appendChild(col);

// Añadir el row al contenedor
container.appendChild(row);

// Añadir el contenedor al footer
footer.appendChild(container);

// Insertar el footer en el elemento con id #footer
document.getElementById('footer').appendChild(footer);



// Dynamic Modal Component
// Sample JSON Data
const jsonData = [
  {
    id: 1,
    title: "Baroc",
    subtitle: "Website",
    category: "Shopify",
    description:
      "e-Commerce Shopify-based for a company dedicated to selling premium sunglasses online in Mexico.",
    imgSrc: "./assets/img/baroc-web.png",
    link: "https://baroc.com.mx",
  },
  {
    id: 2,
    title: "Timbal",
    subtitle: "Website",
    category: "Nuxt JS",
    description: "Website based on wordpress cms for a marketing company, they are dedicated to generate leads for companies.",
    imgSrc: "./assets/img/timbal-web.png",
    link: "https://timbal.com.mx",
  },
];

// Function to Render Cards
function renderCards(data) {
  const recordContainer = document.getElementById('recordContainer');
  recordContainer.innerHTML = ''; // Clear existing content

  data.forEach(record => {
    // Create card template
    const card = document.createElement('div');
    card.className = 'col-sm-12 col-md-6 col-lg-6';
    card.innerHTML = `
      <div class="card mb-5">
        <img
          src="${record.imgSrc}"
          class="card-img-top"
          alt="${record.title}"
        />
        <div class="card-body">
          <h5 class="card-title">${record.title}</h5>
          <h6 class="sub-title">
            <span class="badge text-bg-info">${record.subtitle}</span>
            <div class="badge text-bg-info">${record.category}</div>
          </h6>
          <p class="card-text">${record.description}</p>
        </div>
        <div class="card-footer">
          <a
            href="${record.link}"
            target="_blank"
            class="btn btn-link"
          >
            <i class="fa-regular fa-paper-plane"></i>
          </a>
          <button
            type="button"
            class="btn btn-link showModalBtn"
            data-id="${record.id}"
          >
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </div>
    `;
    recordContainer.appendChild(card);
  });

  // Attach event listeners to "info" buttons
  document.querySelectorAll('.showModalBtn').forEach(button => {
    button.addEventListener('click', event => {
      const recordId = event.currentTarget.dataset.id;
      const record = data.find(item => item.id == recordId);
      showModal(record);
    });
  });
}

// Function to Populate and Show Modal
function showModal(record) {
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = record.title;
  modalBody.innerHTML = `
    <p><strong>Category:</strong> ${record.category}</p>
    <p>${record.description}</p>
    <a href="${record.link}" target="_blank" class="btn btn-primary">Visit</a>
  `;

  const modalElement = new bootstrap.Modal(document.getElementById('dynamicModal'));
  modalElement.show();
}

// Render cards on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCards(jsonData);
});


// Interactive Timeline
// Job Experience Data
const jobExperience = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "Timbal",
    duration: "2023 - Present",
    description: "Developing and maintaining front-end solutions for digital platforms.",
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "Nora IT",
    duration: "2022 - 2023",
    description: "Designed branding materials and marketing assets for clients.",
  },
  {
    id: 3,
    title: "Front End Developer",
    company: "Applab",
    duration: "2021 - 2022",
    description: "Assisted in web development projects and learned about modern technologies.",
  },
  {
    id: 4,
    title: "Intern",
    company: "Tech Innovators",
    duration: "2015 - 2017",
    description: "Assisted in web development projects and learned about modern technologies.",
  },
];

// Function to Render Timeline Items
function renderTimeline(data) {
  const timelineContainer = document.getElementById('timelineContainer');
  timelineContainer.innerHTML = ''; // Clear existing content

  data.forEach(job => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item position-relative';
    timelineItem.dataset.id = job.id;

    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <h5>${job.title}</h5>
      <h6>${job.company}</h6>
      <p>${job.duration}</p>
    `;

    // Attach click event to open modal with job details
    timelineItem.addEventListener('click', () => showJobDetails(job));
    timelineContainer.appendChild(timelineItem);
  });
}

// Function to Populate and Show Job Modal
function showJobDetails(job) {
  const jobModalTitle = document.getElementById('jobModalTitle');
  const jobModalBody = document.getElementById('jobModalBody');

  jobModalTitle.textContent = job.title;
  jobModalBody.innerHTML = `
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Duration:</strong> ${job.duration}</p>
    <p>${job.description}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById('jobModal'));
  modal.show();
}

// Initialize Timeline
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline(jobExperience);
});
