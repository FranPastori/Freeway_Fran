//Variávies Ator
 let xAtor= 100;
 let yAtor= 350;
 let comprimentoAtor = 50;
 let alturaAtor=50
 let colide= false


function mostraAtor()
{image(imagemAtor,xAtor,yAtor,comprimentoAtor,alturaAtor)}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-= 3 
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor+= 3 
  }
  
}
function Colisao(){
  for(let i =0; i< xCarros.length; i=i+1){
 colide=  collideRectRect(xAtor,yAtor, comprimentoAtor, alturaAtor, xCarros[i], yCarros[i], comprimentoCarros, alturaCarros )}
  
 if (colide) {yAtor= 100}
  
}