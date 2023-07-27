let resultadoJugador
let resultadoEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',resultadoFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',resultadoAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',resultadoTierra)

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

function resultadoFuego(){
    resultadoJugador = "fuego"
    resultadoAleatorioEnemigo()
}

function resultadoAgua(){
    resultadoJugador = "agua"
    resultadoAleatorioEnemigo()

}

function resultadoTierra(){
    resultadoJugador = "tierra"
    resultadoAleatorioEnemigo()
}

function resultadoAleatorioEnemigo(){
    let resultadoAleatorio = aleatorio(1,3)

    if(resultadoAleatorio == 1){
        resultadoEnemigo = "fuego"
    }else if(resultadoAleatorio == 2){
        resultadoEnemigo = "agua"
    }else{
        resultadoEnemigo = "tierra"
    }

    combate()
}

function combate(){
    if(resultadoEnemigo == resultadoJugador){
        crearMensaje("empate")
    }else if(resultadoJugador == "fuego" && resultadoEnemigo == "tierra"){
        crearMensaje("ganaste")
    }else if(resultadoJugador == "agua" && resultadoEnemigo == "fuego"){
        crearMensaje("ganaste")
    }else if(resultadoJugador == "tierra" && resultadoEnemigo == "agua"){
        crearMensaje("ganaste")
    }else{
        crearMensaje("perdiste")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerText = "Tu mascota ataco con " + resultadoJugador + " , la mascota del enemigo ataco con " + resultadoEnemigo + " - " + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)
