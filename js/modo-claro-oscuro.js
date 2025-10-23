const botonTema = document.getElementById('btn-tema');

// Verificar si el usuario ya tenía un modo guardado
if (localStorage.getItem('tema') === 'oscuro') {
  document.body.classList.add('modo-oscuro');
  botonTema.textContent = '☀️';
}

// Alternar entre modos
botonTema.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');

  const esOscuro = document.body.classList.contains('modo-oscuro');
  botonTema.textContent = esOscuro ? '☀️' : '🌙';
  localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
});
