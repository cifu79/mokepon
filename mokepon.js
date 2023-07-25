let ataqueJugador

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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerText = "Hipodoge"
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerText = "Capipepo"
    }else if(ataqueAleatorio == 3){
        spanMascotaEnemigo.innerText = "Ratigueya"  
    }
    else{
        alert("Debes seleccionar algo")
    }
}

function ataqueFuego(){
    ataqueJugador = "fuego"
    alert("ataque jugador")
}

function ataqueAgua(){
    ataqueJugador = "fuego"
    alert("ataque jugador")

}

function ataqueTierra(){
    ataqueJugador = "fuego"
    alert("ataque jugador")

}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)
