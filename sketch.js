   
function setup() {
createCanvas(500, 400);
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

