let simbolosDisponibles = ["&#128151;","&#128525;","&#128516;"]

let listaCasillas = []

let numeroTurno = 1

let casillaTurnoAnterior = null

function crearCasillas(){
    
    for(let i=0; i < simbolosDisponibles.length; i++){
        let casilla1 = {
            simbolo : simbolosDisponibles[i],
            mostrandoSimbolo : false
        }
        let casilla2 = {
            simbolo : simbolosDisponibles[i],
            mostrandoSimbolo : false      
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
    }
}

function devolverCasilla(row, col){
    const pos = (row * 3) + col
    return listaCasillas[pos]    
}

function ponerSimbolosCasillas(){
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 3; j++){
            const but = document.getElementById(i+"_"+j)
            const casilla = devolverCasilla(i,j)
            if (casilla.mostrandoSimbolo){
                but.innerHTML = casilla.simbolo
            } else{
                but.innerHTML = "UL"
            }
        }
    }    
}

function casillaOnClick(row, col){
    // 1. Obtener casilla que se hizo click
    const casillaSeleccionada = devolverCasilla(row,col)
    if (numeroTurno == 1){
        casillaSeleccionada.mostrandoSimbolo = true
        casillaTurnoAnterior = casillaSeleccionada
        numeroTurno = 2
    }else{
        casillaSeleccionada.mostrandoSimbolo = true

        // 2. Verificacion si son iguales los simbolos
        if (casillaTurnoAnterior.simbolo != casillaSeleccionada.simbolo){
            // Deben Ocultarse los dos
            ponerSimbolosCasillas()

            setTimeout(function(){
                casillaSeleccionada.mostrandoSimbolo = false
                casillaTurnoAnterior.mostrandoSimbolo = false
                ponerSimbolosCasillas()
                casillaTurnoAnterior = null
                numeroTurno = 1
            },1000)
        }else{
            casillaTurnoAnterior = null
            numeroTurno = 1
            ponerSimbolosCasillas()
        }
    }
}

function main(){
    crearCasillas()
    ponerSimbolosCasillas()
}

main()