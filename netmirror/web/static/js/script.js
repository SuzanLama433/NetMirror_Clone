const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
function scrollSlider(direction) {
  const slider = document.getElementById('movieSlider');
  // Dynamic scrolling width based on one card width + gap
  const scrollAmount = 300; 
  
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}