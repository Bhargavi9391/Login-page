function login() {
    const email = document.querySelector('#mail').value.trim();
    const password = document.querySelector('#pass').value.trim();
    const success = document.querySelector('#display');
    const error = document.querySelector('#display2');
    success.style.display = 'none';
    error.style.display = 'none';
    if (email === '' || password === '') {
        alert('Please enter your details.');
        return;
    }
    if (!email.endsWith('@gmail.com')) {
        alert('Please enter a valid Gmail address (example@gmail.com).');
        return;
    }
    success.style.display = 'block';
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 2000);
}
