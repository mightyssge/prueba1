let numeroTurno=1
let turnos=0
const combinacionesGanadoras=[
    ["0_0", "0_1", "0_2"], ["1_0", "1_1", "1_2"], ["2_0", "2_1", "2_2"],
    ["0_0", "1_0", "2_0"], ["0_1", "1_1", "2_1"], ["0_2", "1_2", "2_2"],
    ["0_0","1_1", "2_2"], ["0_2", "1_1", "2_0"]
];
let jugadasX=[]
let jugadasO=[]
let conta=0
function verificarGanador(jugadas) {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let ganador = combinacionesGanadoras[i].every(pos => jugadas.includes(pos));
        if (ganador) {
            setTimeout(function(){

                alert("Jugador X ganó");
            
            
            }, 700)
            setTimeout(function(){

                location.reload();
            
            
            }, 700)

            return;
        }
    }
}
function verificarGanador1(jugadas) {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let ganador = combinacionesGanadoras[i].every(pos => jugadas.includes(pos));
        if (ganador) {
            setTimeout(function(){

                alert("Jugador Y ganó");
            }, 700)
            setTimeout(function(){

                location.reload();
            
            
            }, 700)
            
            return ;
        }
    }
}

function devolverCasilla(i,j){
    return document.getElementById(i+"_"+j)
}
let casilla=null

function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);
    
    casilla = devolverCasilla(i, j);
    let idCasilla = i + "_" + j;
    
    if (numeroTurno === 1) {
        numeroTurno = 2;
        casilla.innerHTML = "&#10060;";
        jugadasX.push(idCasilla);
        verificarGanador(jugadasX);
    } else {
        numeroTurno = 1;
        casilla.innerHTML = "&#11093;";
        jugadasO.push(idCasilla);
        verificarGanador1(jugadasO);
    }
    turnos++
    if (turnos==9) {
        alert("Empate");
        setTimeout(function(){

            location.reload();
        
        
        }, 700)
    }
    casilla.disabled = true; 
}

main()