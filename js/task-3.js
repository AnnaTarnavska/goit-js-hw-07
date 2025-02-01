const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', function () {
    const inputValue = textInput.value.trim();

    if (inputValue === '') {
        output.textContent = 'Anonymus';
    
    } else {
        output.textContent = inputValue;
    }
});