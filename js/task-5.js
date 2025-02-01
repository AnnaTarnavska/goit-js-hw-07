const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

button.addEventListener('click', getRandomHexColor)
  
  function getRandomHexColor() {
   const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
     .padStart(6, 0)}`;
    
  
    document.body.style.backgroundColor = randomColor;
    spanColor.textContent = randomColor;
}
console.log(getRandomHexColor);