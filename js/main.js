function hovered(e) {
  console.log(e);
}
let logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('mousemove', hovered);  
}

