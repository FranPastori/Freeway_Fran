let xCarros = [600,600,600,600,600,600]
let yCarros = [40,96,150,210,270,318]
let VelocidadeCarros = [2,2.5,3.2,5,3.3,1.5]
let comprimentoCarros= [50,50,50,50,50,50]
let alturaCarros= [40,40,40,40,40,40]

function mostraCarro(){
  for(let i = 0; i< imagemCarros.length; i= i +1){
  image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarros[i],alturaCarros[i])
  }

}
function movimentaCarro(){
  for ( let i = 0; i< xCarros.length; i=i+1){
  xCarros[i] -=  VelocidadeCarros[i]}

}
function voltaPosicaoInicial(){
  for (let i =0; i< xCarros.length; i=i+1){
  if (passouTodaATela(xCarros[i])){xCarros[i]=600}};
  
}


function passouTodaATela(xCarros){
 return xCarros <-50;
   
}
