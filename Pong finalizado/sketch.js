//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro/2;

//velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//tamanho das raquetes
let wPlays = 8;
let hPlays = 75;

//Variáveis da raquete PlayOne
let xPlayOne = 5;
let yPlayOne = 150;

//Variáveis da raquete PlayTwo
let xPlayTwo = 585;
let yPlayTwo = 150;

let velocidadeYPlayTwo;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
}  

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBordas();
  mostraRaquetes();
  movimentaPlayOne();
  verificaColisaoPlayOne();
  verificaColisaoPlayTwo();
  //verificaColisaoPlayTwoAuto()
  //colisaoImportada();
  movimentaPlayTwo();
  //movimentaPlayTwoAuto();
  incluiPlacar();
  marcaPonto();
}

//propriedades da bolinha
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);  
}

//direção da bolinha
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

//Bolinha toca na borda
function verificaColisaoBordas(){
  if(xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
   }
  if(yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
   }
}

//propriedades das Raquetes
function mostraRaquetes(){
 rect(xPlayOne, yPlayOne, wPlays, hPlays);
 rect(xPlayTwo, yPlayTwo, wPlays, hPlays);
}

//Movimenta a raquete PlayOne
function movimentaPlayOne(){
//para 'w'codigo 87
  if(keyIsDown(SHIFT)){
    if(yPlayOne < 0){
      yPlayOne =0;
    }else {
      yPlayOne -= 6;
    }
  }
//para 's' codigo 83
  if(keyIsDown(CONTROL)) {
    if(yPlayOne > 330){
      yPlayOne = 330;
    }else {
      yPlayOne += 6;
    }
  }
}

//Movimenta a raquete PlayTwo
function movimentaPlayTwo(){
  if(keyIsDown(UP_ARROW)) {
    if(yPlayTwo < 0){
      yPlayTwo = 0;
    }else {
      yPlayTwo -= 6;
    }
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(yPlayTwo > 330){
      yPlayTwo = 330;
    }else {
      yPlayTwo += 6;
    }
  }
}

function verificaColisaoPlayOne(){
  if (xBolinha - raio < xPlayOne + wPlays && yBolinha - raio < yPlayOne + hPlays && yBolinha + raio > yPlayOne){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoPlayTwo(){
  if (xBolinha + raio > xPlayTwo && yBolinha - raio < yPlayTwo + hPlays && yBolinha + raio > yPlayTwo) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
//---Para PlayTwo Automatico----------------

//movimenta a raquete PlayTwoAuto;
//function movimentaPlayTwoAuto(){
//  velocidadeYPlayTwo = yBolinha - yPlayTwo - wPlays/2 - //30;
//  yPlayTwo += velocidadeYPlayTwo;
//}

//function verificaColisaoPlayTwoAuto(){
//  if (xBolinha + raio > xPlayTwo){
//    velocidadeXBolinha *= -1;
//    raquetada.play();
//  }
//}
//------------------------------------------

//------------------------------------------
//função colidir importada do guthub
//function colisaoImportada(){
//colidiu =
//collideRectCircle(xPlayOne,yPlayOne,wPlayOne,hPlayOne,xB//olinha,yBolinha, raio);
  
//  if(colidiu){
//    velocidadeXBolinha *= -1;
//  }
//}
//-------------------------------------------

//marcando pontos
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  
  fill(255,100,0);
  rect(150,10,40,20);
  fill(255)
  text(meusPontos,170, 26);
 
  fill(255,100,0);
  rect(450,10,40,20);
  fill(255)
  text(pontosDoOponente,470,26);
  
  
  
}  
function marcaPonto(){ 
  if(xBolinha - raio < 1){
    pontosDoOponente += 1;
    ponto.play();
  }
  if(xBolinha + raio > 598){
    meusPontos += 1;
    ponto.play();
  }
}
   