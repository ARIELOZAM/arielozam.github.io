// Certification data
const certifications = [
    {
        title: 'Front End Development',
        issuer: 'freeCodeCamp',
        date: '2024',
        image: 'assets/img/certifications/frontend.png',
        url: '#'
    },
    // Add your actual certifications here
];

// Load certifications
document.addEventListener('DOMContentLoaded', () => {
    const certificationGrid = document.querySelector('.certification-grid');
    
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card';
        certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="mb-3" style="max-width: 100px;">
            <h4>${cert.title}</h4>
            <p>${cert.issuer}</p>
            <p class="text-muted">${cert.date}</p>
            ${cert.url ? `<a href="${cert.url}" target="_blank" class="btn btn-primary btn-sm">View Certificate</a>` : ''}
        `;
        certificationGrid.appendChild(certCard);
    });
});
