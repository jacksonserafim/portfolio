let contador = 1
let selecionado = false
let intervalID;

document.getElementById('radio1').checked = true;

if (!selecionado){
    intervalID = setInterval( function(){
        proximaImg()
    }, 3000)
}

function proximaImg(){
    contador++
    if (contador>4){
        contador = 1
    }
    document.getElementById(`radio${contador}`).checked = true;
}

function pararSlide(){
    selecionado = true
    clearInterval(intervalID)
}


