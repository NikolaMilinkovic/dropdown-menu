const dropdown = document.getElementById('dropdown-wrapper');
const content = document.getElementById('dropdown-content');

dropdown.addEventListener('mouseenter', () => {content.classList.toggle('hidden');});
dropdown.addEventListener('mouseleave', () => {content.classList.toggle('hidden');});

