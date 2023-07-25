let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerText = "Hipodoge"
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerText = "Capipepo"
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerText = "Ratigueya"
        
    }
    else{
        alert("Debes seleccionar algo")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerText = "Hipodoge"
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerText = "Capipepo"
    }else if(mascotaAleatorio == 3){
        spanMascotaEnemigo.innerText = "Ratigueya"  
    }
    else{
        alert("Debes seleccionar algo")
    }
}

function ataqueFuego(){
    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "agua"
    ataqueAleatorioEnemigo()

}

function ataqueTierra(){
    ataqueJugador = "tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "fuego"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "agua"
    }else{
        ataqueEnemigo = "tierra"
    }

    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerText = "Tu mascota ataco con " + ataqueJugador + " , la mascota del enemigo ataco con " + ataqueEnemigo + "  - pendiente."

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)
