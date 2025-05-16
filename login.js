document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  if (!email || !password) {
    alert('Por favor completa todos los campos.');
    return;
  }
  console.log('Login con:', email);
  alert('¡Bienvenido de nuevo!'); 
});