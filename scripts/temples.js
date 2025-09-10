document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    const isVisible = nav.style.display === 'block';
    nav.style.display = isVisible ? 'none' : 'block';
    menuToggle.textContent = isVisible ? '☰' : '✖';
  });

  // Footer dynamic year and last modified
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
