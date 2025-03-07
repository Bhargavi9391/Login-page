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

    if (email === 'bhargavi@gmail.com' && password === 'bhar') {
        success.style.display = 'block';
        
        
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 2000);
    } else {
        error.style.display = 'block';
    }
}
