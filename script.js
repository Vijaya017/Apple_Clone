document.addEventListener('DOMContentLoaded', () => {
  const selectElement = (element) => document.querySelector(element);

  // Event listener for the mobile menu icon
  selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
  });

  // Event listener using event delegation
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains('nav-link-bag')) {
      bagContainer = selectElement('.bag-container');
      bagContainer.classList.toggle('otheractive');
    }
  });
});
