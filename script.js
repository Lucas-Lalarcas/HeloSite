function atualizaTela(num){
    if(canwe){
        if(tela.innerHTML.length < 10){
    tela.innerHTML = tela.innerHTML + (num);}}
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
var btnponto = document.getElementById('ponto'); 
var btnmais = document.getElementById('+');
var btnmenos = document.getElementById('-');
var btnvezes = document.getElementById('x');
var btndivide = document.getElementById('/');
var btnreset = document.getElementById('reset');
var btnigual = document.getElementById('=');
var tela = document.getElementById('screen');
var canwe = true;
var pode = true;
var valor1 = 0;
var valor2 = 0;
var tipo1 = "";

btnmais.addEventListener("click" , function(){
    opera("+");
})

btnmenos.addEventListener("click" , function(){
    opera("-");
})

btnvezes.addEventListener("click" , function(){
    opera("x");
})

btndivide.addEventListener("click" , function(){
    opera("/");
})

btnigual.addEventListener("click" , function(){
    iguala();
})


function opera(tipo){
    if(pode && canwe){
        valor1 = parseFloat(tela.textContent.replace(",", "."));
        tipo1 = tipo;
        pode = false;
        tela.innerHTML = "";
        iguale = true;
    }
}

function iguala(){
    if(canwe && iguale){
        valor2 = parseFloat(tela.textContent.replace(",", "."));
        if(tipo1 == "+") {
        tela.innerHTML =(valor1+valor2);
    }
    else if(tipo1 == "-") {
        tela.innerHTML =  (valor1-valor2);
    }
    else if(tipo1 == "x") {
        tela.innerHTML =  (valor1*valor2);
    }
    else if(tipo1 == "/") {
        tela.innerHTML = (valor1/valor2);
    }
    else {tela.innerHTML = "ERRO"}
    canwe = true;
    pode = true;
    iguale = false;
}
}

iguale = false;



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
    if(tela.innerHTML == ""){console.log("Para de colocar 0 na esquerda")} else{
    atualizaTela(0)}
});


btnponto.addEventListener("click", function(){
    if(tela.innerHTML == ""){console.log("Para de colocar . na esquerda")} else{
    atualizaTela('.')}
});




btnreset.addEventListener("click", function(){
    valor1 = 0;
    tipo1 = "";
    valor2 = 0;
    canwe = true;
    pode = true;
    tela.innerHTML = "";
    iguale = false;

})


