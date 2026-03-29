document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }

    // Hover effect
    link.addEventListener('mouseenter', () => {
      link.style.color = '#FFD580'; 
    });
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('active')) {
        link.style.color = '';
      }
    });
  });

  // Logo for home
  const logo = document.querySelector('.navbar-brand img');
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

document.getElementById('year').textContent = new Date().getFullYear();  
});