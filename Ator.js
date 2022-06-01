//Variávies Ator
xAtor= 100;
yAtor= 350;

function mostraAtor()
{image(imagemAtor,xAtor,yAtor,50,50)}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-= 3 
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor+= 3 
  }
}