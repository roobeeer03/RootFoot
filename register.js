document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-password').value.trim();
  const confirm = document.getElementById('reg-confirm').value.trim();
  if (!name || !email || !pass || !confirm) {
    alert('Por favor completa todos los campos.');
    return;
  }
  if (pass !== confirm) {
    alert('Las contraseñas no coinciden.');
    return;
  }
  console.log('Registro de:', name, email);
  alert('¡Registro exitoso!'); 
});