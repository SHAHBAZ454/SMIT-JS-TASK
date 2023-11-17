function checkLogin() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const correctUsername = 'Shahbaz khan'; 
    const correctPassword = 'spiderman565';

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      document.getElementById('message').textContent = 'Login successful!';
     
    } else {
      document.getElementById('message').textContent = 'Incorrect username or password. Please try again.';
    }
  }

  document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
  });