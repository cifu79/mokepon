function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

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
}

window.addEventListener('load', iniciarJuego)
