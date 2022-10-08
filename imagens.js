//imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;


function preload(){ imagemEstrada=loadImage("imagens/estrada.png");
imagemAtor=loadImage("imagens/personagem.png");
imagemCarro=loadImage("imagens/carro-1.png");
imagemCarro2=loadImage("imagens/carro-2.png");
imagemCarro3=loadImage("imagens/carro-3.png");
imagemCarros= [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro3,imagemCarro2];
sonsDaTrilha = loadSound("sons/trilha.mp3");
somDaColisao = loadSound( "sons/colidiu.mp3");
somPontos = loadSound ( "sons/pontos.wav");}