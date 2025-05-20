var segundo=0
var minuto=0
var hora=0

var interval

function doisdigitos(digit){
    if(digit<10){
        return('0')+digit
    }else{
        return(digit)
    }

}

function iniciar(){
     document.getElementById('textoEstudos').innerText = "Estudando...";
     document.getElementById('textoEstudos').classList.add("destaque");
    cronometro()
interval= setInterval(cronometro,1000)
}

function pausar(){
     document.getElementById('textoEstudos').innerText = "Hora de descansar!";
     document.getElementById('textoEstudos').classList.add("destaque");
clearInterval(interval)
}

function resetar(){
       document.getElementById('textoEstudos').innerText = "Cronômetro para estudo:";
         document.getElementById('textoEstudos').classList.remove("destaque");
clearInterval(interval)
segundo=0
minuto=0
document.getElementById('cronometro').innerText='00:00:00'
}

function cronometro(){
    segundo++
    if(segundo==60){
        minuto++
        segundo=0
        if(minuto==60){
            minuto=0
            hora++
        }
    }

document.getElementById('cronometro').innerText=doisdigitos(hora)+':'+doisdigitos(minuto)+':'+doisdigitos(segundo);
}
