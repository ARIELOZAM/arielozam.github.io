// Crear el contenedor principal del navbar
const navBar = document.createElement('nav');
navBar.className = 'navbar navbar-expand-lg text-bg-dark fixed-top';
navBar.style.zIndex = '9999';

// Crear el contenedor interno (container-fluid)
const containerFluid = document.createElement('div');
containerFluid.className = 'container-fluid';

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
  { href: '/', text: 'Home', class: 'nav-link' },
  { href: '#projects', text: 'Projects', class: 'nav-link' },
  { href: '#experience', text: 'Experience', class: 'nav-link' },
  { href: '#education', text: 'Education', class: 'nav-link' },
  {
    href: './assets/files/arielozam-updated-resume-24.pdf',
    text: 'Download CV',
    class: 'btn btn-outline-light',
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
