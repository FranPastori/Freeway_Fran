//imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;


function preload(){ imagemEstrada=loadImage("Imagens/estrada.png");
imagemAtor=loadImage("personagem.png");
imagemCarro=loadImage("carro-1.png");
imagemCarro2=loadImage("carro-2.png");
imagemCarro3=loadImage("carro-3.png");
imagemCarros= [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro3,imagemCarro2];
sonsDaTrilha = loadSound("Sons/trilha.mp3");
somDaColisao = loadSound( "Sons/colidiu.mp3");
somPontos = loadSound ( "Sons/pontos.wav");}