const toggleBtn = document.querySelector('.moon');
const body = document.body;

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
  } else {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
  }
});



let menu = document.querySelector('.navbar'); 

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
