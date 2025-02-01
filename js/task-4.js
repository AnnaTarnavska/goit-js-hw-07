
const form = document.querySelector('.login-form');

form.addEventListener('submit', checkLogin);

function checkLogin(event) {
    event.preventDefault();

    const form = event.target;
    const login = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (login === '' || password === '') {
        return console.log('All form fields must be filled in');
    }
    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();

}

