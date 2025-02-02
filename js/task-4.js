
const form = document.querySelector('.login-form');

form.addEventListener('submit', checkLogin);

function checkLogin(event) {
    event.preventDefault();

    const form = event.target;
    const login = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (login === '' || password === '') {
        return alert('All form fields must be filled in');
    }
    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();

}

