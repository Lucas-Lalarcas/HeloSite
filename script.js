function atualizaTela(num){
    if(canwe){
    tela.innerHTML = tela.innerHTML + (num);}
  }


var btn1 = document.getElementById('1'); 
var btn2 = document.getElementById('2'); 
var btn3 = document.getElementById('3'); 
var btn4 = document.getElementById('4'); 
var btn5 = document.getElementById('5'); 
var btn6 = document.getElementById('6'); 
var btn7 = document.getElementById('7'); 
var btn8 = document.getElementById('8'); 
var btn9 = document.getElementById('9'); 
var btn0 = document.getElementById('0'); 
var btnmais = document.getElementById('+');
var btnreset = document.getElementById('reset');
var btnigual = document.getElementById('=');
var tela = document.getElementById('screen');
var resultado = 0;
var type;
var canwe = true;
var base = [];

btnmais.addEventListener("click", function(){
    if(canwe){{if(tela.innerHTML == ""){window.alert("digite antes de somar!")}else{
    base.push(parseInt(tela.innerHTML) );
    tela.innerHTML = "";}
}}});

btnreset.addEventListener("click", function(){
    if(tela.innerHTML == ""){window.alert("digite antes de resetar")}else{
    base = [];
    resultado = 0;
    tela.innerHTML = "";
    canwe = true;
}
});




btnigual.addEventListener("click", function(){
    if(canwe){
    if(tela.innerHTML == ""){window.alert("digite antes de saber o resultado!")}else{
        base.push(parseInt(tela.innerHTML) *1);
        tela.innerHTML = "";}
        for(var i = 0; i < base.length; i++){
            resultado = resultado + base[i];
        }
        tela.innerHTML = "Resultado = "+resultado
        canwe = false;
}});


btn1.addEventListener("click", function(){
    atualizaTela(1)
});

btn2.addEventListener("click", function(){
    atualizaTela(2)
});

btn3.addEventListener("click", function(){
    atualizaTela(3)
});


btn4.addEventListener("click", function(){
    atualizaTela(4)
});

btn5.addEventListener("click", function(){
    atualizaTela(5)
});


btn6.addEventListener("click", function(){
    atualizaTela(6)
});


btn7.addEventListener("click", function(){
    atualizaTela(7)
});


btn8.addEventListener("click", function(){
    atualizaTela(8)
});

btn9.addEventListener("click", function(){
    atualizaTela(9)
});

btn0.addEventListener("click", function(){
    if(tela.innerHTML == ""){console.log("Para de colocar 0 na esquerda seu idiota")} else{
    atualizaTela(0)}
});






