const dropdown = document.getElementById('dropdown-wrapper');
const label = document.getElementById('dropdown-label');
const content = document.getElementById('dropdown-content');

dropdown.addEventListener('mouseenter', showDropdown);
dropdown.addEventListener('mouseleave', showDropdown);

function showDropdown(){
    console.log('showDropdown activated');
    content.classList.toggle('hidden');
}
