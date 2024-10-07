document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

    fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirm
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('registerResponse').textContent = data.message;
    })
    .catch((error) => {
        document.getElementById('registerResponse').textContent = 'Error: ' + error.message;
    });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('loginResponse').textContent = data.message;
        if (data.success) {
            // Optionally, handle successful login (e.g., store the token)
            console.log('Token:', data.data.token);
        }
    })
    .catch((error) => {
        document.getElementById('loginResponse').textContent = 'Error: ' + error.message;
    });
});
