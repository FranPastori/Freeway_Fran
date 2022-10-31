   
function setup() {
createCanvas(1000, 800);
sonsDaTrilha.loop();
  
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  colisao();
  mostraPontos();
  pontos();
}

