let button = document.querySelector('.spoil');
var texte = document.querySelector('.texte');

button.addEventListener('click', divulgacher);

function divulgacher() {
  if (button.value === 'Afficher') {
    button.value = 'Cacher';
    texte.textContent = 'Ah Ah Ah, je vais vous raconter la fin';
  } else {
    button.value = 'Afficher';
    texte.textContent = '';
     }
}