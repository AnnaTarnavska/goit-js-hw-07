const textArea = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxCollection = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {

  boxCollection.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const boxSize = 30 + i * 10;

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    box.style.borderRadius = '5px';
    box.style.display = 'inline-block';

    boxCollection.appendChild(box);
    
  };
};

btnCreate.addEventListener('click', function() {
  const checkValue = parseInt(textArea.value, 10);
  if (checkValue < 1 || checkValue > 100) {
    return console.log('Значення має бути в межах від 1 до 100 включно');
  };

createBoxes(checkValue);
textArea.value = '';
})

btnDestroy.addEventListener('click', function() {
  boxCollection.innerHTML = '';
})
