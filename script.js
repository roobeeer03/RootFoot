document.getElementById('search-btn').addEventListener('click', () => {
  const email = document.getElementById('email-input').value.trim();
  if (!email) {
    alert('Por favor ingresa un correo válido.');
    return;
  }
  console.log('Buscando restaurantes para:', email);
  alert(`Buscando para ${email}…`);
});