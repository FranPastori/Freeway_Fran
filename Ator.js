//Variávies Ator
let xAtor = 100;
let yAtor = 370;
let colide = false;
let meusPontos = 0;
function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 50, 50);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)&& atorPodeSeMovimentar()) {
    yAtor += 3;
  }
}
function colisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colide = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros[i],
      alturaCarros[i],
      xAtor,
      yAtor,
      20
    )
  if (colide) {voltaAtorPosicaoInicial()
    if (pontosMaiorQueZero()){meusPontos-=1}
    somDaColisao.play();
  }
  }
}
function pontosMaiorQueZero(){
  return meusPontos>0
}
function voltaAtorPosicaoInicial(){
  yAtor = 370;
}
function mostraPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255,165,0)
  text(meusPontos,width/5,27)
}
function pontos() { if (yAtor <=15){
    meusPontos++
    somPontos.play();
    voltaAtorPosicaoInicial()}}
function atorPodeSeMovimentar(){
  return yAtor<366
}
  

