document.addEventListener('click', function(event) {
  const fraseMarcante = document.createElement('p');
  fraseMarcante.textContent = 'A mudança começa em você! ✨'; // Substitua por sua frase
  fraseMarcante.classList.add('frase'); // Adiciona uma classe para estilizar
  document.body.appendChild(fraseMarcante);

  // Remover a frase após alguns segundos
  setTimeout(() => {
    fraseMarcante.remove();
  }, 3000); // Ajuste o tempo em milissegundos
});
