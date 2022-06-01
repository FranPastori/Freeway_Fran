let xCarros = [600,600,600]
let yCarros = [40,96,150]
let VelocidadeCarros = [2,2.5,3.2]
function mostraCarro(){
  image(imagemCarros[0],xCarros[0],yCarros[0],50,40)
  image(imagemCarros[1],xCarros[1],yCarros[1],50,40)
  image(imagemCarros[2],xCarros[2],yCarros[2],50,40)
}
function movimentaCarro(){
  xCarros[0] -=  VelocidadeCarros[0]
  xCarros[1]-= VelocidadeCarros[1]
  xCarros[2]-= VelocidadeCarros[2]

}
function voltaPosicaoInicial(){
  if (xCarros[0]<-50){xCarros[0]=600}
  if (xCarros[1]<-50){xCarros[1]=500}
  if (xCarros[2]<-50){xCarros[2]=600}
  
}
