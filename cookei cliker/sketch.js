
var cookie;
var cookiePerSecond = 0;
var cookieCount = 9999999990;
var vovo ;
var fazenda;
var mina; 
var industria;
var banco;
var torre;
var javaScript;
var cursor;

var vovoCount = 0;
var fazendaCount = 0;
var minaCount = 0; 
var industriaCount = 0;
var bancoCount = 0;
var torreCount = 0;
var javaScriptCount = 0;
var cursorCount = 0;

var cursorPreco = 15;
var vovoPreco = 100;
var fazendaPreco = 1100;
var minaPreco = 12000; 
var industriaPreco = 1100000;
var bancoPreco = 18000000;
var torrePreco = 300000000;
var javaScriptPreco = 4000000000;

var cursorCountPerSecond = 0;
var vovoCountPerSecond = 0;
var fazendaCountPerSecond = 0;
var minaCountPerSecond = 0; 
var industriaCountPerSecond = 0;
var bancoCountPerSecond = 0;
var torreCountPerSecond = 0;
var javaScriptCountPerSecond = 0;


var cookieDourado;
var cookiedouradoImg;

var vovop = false;
var fazendap= false;
var minap= false; 
var industriap= false;
var bancop= false;
var torrep= false;
var javaScriptp= false;
var cursorp= false;

function preload(){
  
}

function setup(){
createCanvas(1900,945);
frameRate(60);

cookieDouradoTempo();


cookie = createImg("imagems/cookie-principal.png");
cookie.position(150,350);
cookie.size(350,350);
cookie.mouseClicked(cookieCliked);


cursor  = createImg("imagems/cursor.png");
cursor.position(1350,200);
cursor.size(80,80);
cursor.mouseClicked(cursorComprado);
cursorp = true;

vovo = createImg("imagems/vovo.webp");
vovo.position(1350,290);
vovo.size(80,80);
vovo.mouseClicked(vovoComprado);
vovop = true;

fazenda = createImg("imagems/fazenda.jpg");
fazenda.position(1350,380);
fazenda.size(80,80);
fazenda.mouseClicked(fazendaComprado);
fazendap = true;

mina = createImg("imagems/mina.png");
mina.position(1350,470);
mina.size(80,80);
mina.mouseClicked(minaComprado);
minap = true;

industria = createImg("imagems/industria.jpg");
industria.position(1350,560);
industria.size(80,80);
industria.mouseClicked(industriaComprado);
industriap = true;

banco = createImg("imagems/banco.png");
banco.position(1350,650);
banco.size(80,80);
banco.mouseClicked(bancoComprado);
bancop = true;

torre = createImg("imagems/torre.png");
torre.position(1350,740);
torre.size(80,80);
torre.mouseClicked(torreComprado);
torrep = true;

javaScript = createImg("imagems/Java-script.png");
javaScript.position(1350,850);
javaScript.size(80,80);
javaScript.mouseClicked(javaScriptComprado);
javaScriptp = true;

}

function draw() {
 background(0)

cookiePerSecond = cursorCountPerSecond+vovoCountPerSecond+fazendaCountPerSecond+minaCountPerSecond+industriaCountPerSecond+bancoCountPerSecond+torreCountPerSecond+javaScriptCountPerSecond;




 fill("white");
 textSize(70)
 text(Math.round(cookieCount),200, 240);
 text(Math.round(cookiePerSecond)+"  Cookie por segundo",200, 140);
 //como arredondar em um lugar decimal
 cursorFazendocookie()
 vovoFazendocookie()
 fazendaFazendocookie()
 minaFazendocookie()
 industriaFazendocookie()
 bancoFazendocookie()
 torreFazendocookie()
 javaScriptFazendocookie()




 text(Math.round(cursorPreco),1500,250)
 text(Math.round(vovoPreco),1500,340)
 text(Math.round(fazendaPreco),1500,430)
 text(Math.round(minaPreco),1500,520)
 text(Math.round(industriaPreco),1500,610)
 text(Math.round(bancoPreco),1500,700)
 text(Math.round(torrePreco),1500,790)
 text(Math.round(javaScriptPreco),1500,900)

 text(cursorCount,1000,250)
 text(vovoCount,1000,340)
 text(fazendaCount,1000,430)
 text(minaCount,1000,520)
 text(industriaCount,1000,610)
 text(bancoCount,1000,700)
 text(torreCount,1000,790)
 text(javaScriptCount,1000,900)

 
drawSprites();
}

function cookieCliked(){
  cookieCount += 1;

}

function cursorClicker(cursorCount){
  var cursorCookiePorSegundo
  cursorCookiePorSegundo = cursorCount * 0.1;
  cookieCount += cursorCookiePorSegundo;
  


}


function cursorComprado(){
  if (cookieCount>= cursorPreco){
    cookieCount= cookieCount-cursorPreco;
    cursorPreco = cursorPreco * 1.1;
    cursorCount = cursorCount + 1;
    
    
  }
}

function vovoComprado(){
  if (cookieCount>= vovoPreco){
    cookieCount= cookieCount-vovoPreco;
    vovoPreco = vovoPreco * 1.1;
    vovoCount = vovoCount + 1;
    
  }
}

function fazendaComprado(){
  if (cookieCount>= fazendaPreco){
    cookieCount= cookieCount-fazendaPreco;
    fazendaPreco = fazendaPreco * 1.15;
    fazendaCount = fazendaCount + 1;
    
  }
}

function minaComprado(){
  if (cookieCount>= minaPreco){
    cookieCount= cookieCount-minaPreco;
    minaPreco = minaPreco * 1.15;
    minaCount = minaCount + 1;
    
  }
}

function industriaComprado(){
  if (cookieCount>= industriaPreco){
    cookieCount= cookieCount-industriaPreco;
    industriaPreco = industriaPreco * 1.2;
    industriaCount = industriaCount + 1;
    
  }
}

function bancoComprado(){
  if (cookieCount>= bancoPreco){
    cookieCount= cookieCount-bancoPreco;
    bancoPreco = bancoPreco * 1.2;
    bancoCount = bancoCount + 1;
    
  }
}

function torreComprado(){
  if (cookieCount>= torrePreco){
    cookieCount= cookieCount-torrePreco;
    torrePreco = torrePreco * 1.2;
    torreCount = torreCount + 1;
    
  }
}

function javaScriptComprado(){
  if (cookieCount>= javaScriptPreco){
    cookieCount= cookieCount-javaScriptPreco;
    javaScriptPreco = javaScriptPreco * 1.2;
    javaScriptCount = javaScriptCount + 1;
    
  }
}


function cursorFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += cursorCount * 0.1;
    cursorCountPerSecond = cursorCount * 0.1;
  }
}

function vovoFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += vovoCount * 1;
    vovoCountPerSecond = vovoCount * 1;
    
  }
}
function fazendaFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += fazendaCount * 8;
    fazendaCountPerSecond = fazendaCount * 8;
  }
}
function minaFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += minaCount * 47;
    minaCountPerSecond = minaCount * 47;
  }
}
function industriaFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += industriaCount * 260;
    industriaCountPerSecond = industriaCount * 260;
  }
}
function bancoFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += bancoCount * 1400;
    bancoCountPerSecond = bancoCount * 1400;
  }
}
function torreFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += torreCount * 8000;
    torreCountPerSecond =  torreCount * 8000;
  }
}

function javaScriptFazendocookie(){
 
  if (frameCount%60===0){
    cookieCount += javaScriptCount * 50000 ;
    javaScriptCountPerSecond =javaScriptCount * 50000 ;
  }
}

function cookieDouradoTempo(){
  setTimeout(()=>{
   cookieDouradoCriado()
  },1000)
  
  //tempo de 5 minutos
 }

function cookieDouradoClicado(){


 var cookieDouradoeffect = Math.random(1,2)
 switch(cookieDouradoeffect){
  case 1: cookiePerSecond = cookiePerSecond * 7
  //1,17 segundos

  case 2: var prediosComprados =0;
  if (cursorp == true) {
    prediosComprados +=1;
  }

  if (vovop == true) {
    prediosComprados +=1;
  }

  if (fazendap == true) {
    prediosComprados +=1;
  }

  if (minap == true) {
    prediosComprados +=1;
  }

  if (industriap == true) {
    prediosComprados +=1;
  }

  if (bancop == true) {
    prediosComprados +=1;
  }

  if (torrep == true) {
    prediosComprados +=1;
  }

  if (javaScriptp == true) {
    prediosComprados +=1;
  }


  
  switch(Math.random(1,prediosComprados)){
    case 1: cookiePerSecond = cookiePerSecond  * cursorCount;
    break

    case 2: cookiePerSecond = cookiePerSecond  * vovoCount;
    break

    case 3: cookiePerSecond = cookiePerSecond  * fazendaCount;
    break

    case 4: cookiePerSecond = cookiePerSecond  * minarCount;
    break

    case 5: cookiePerSecond = cookiePerSecond  * industriaCount;
    break

    case 6: cookiePerSecond = cookiePerSecond  * bancoCount;
    break

    case 7: cookiePerSecond = cookiePerSecond  * torreCount;
    break

    case 8: cookiePerSecond = cookiePerSecond  * javaScriptCount;
    break

  }
  
 }
 
}

function cookieDouradoCriado(){
  cookiedourado = createImg("imagems/cookie-dourado.png");
  cookieDourado.position(200,200);
  cookieDourado.size(350,350);
  cookieDourado.mouseClicked(cookieDouradoClicado());
  cookiedourado.scale = 1;
//sdhfoaisudfhgyhjuhygtfrtgyhujuhygtrfdesdrftgyhujikjuhytgr
}

//Math.random(10,1800),Math.random(10,845)