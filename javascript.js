var filmeslista = document.querySelectorAll('.movies');
var filmestrailer = document.querySelectorAll('.trailerr');

var i = 0;

filmeslista[0].addEventListener('click', function(){
        trocar(0);
    })

    filmeslista[1].addEventListener('click', function(){
        trocar(1);
    })
    filmeslista[2].addEventListener('click', function(){
        trocar(2);
    })

    filmeslista[3].addEventListener('click', function(){
        trocar(3);
    })

    filmeslista[4].addEventListener('click', function(){
        trocar(4);
    })

    filmeslista[5].addEventListener('click', function(){
        trocar(5);
    })

var i = 0;
    function trocar(numero){
        for(i = 0; i < filmeslista.length; i++){
    filmestrailer[i].classList.add('invisivel');
        }
        filmestrailer[numero].classList.remove('invisivel');
    }