function tocaSomPom (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document;querySelectorAll(".tecla");

//para
for (Let contador = 0; contador < listaDeTeclas.lenght; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList [1];
  const idAudio = ´#som_$(instrumental}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }
}

listaDeTeclas[0].onclick = tocaSomPom;

