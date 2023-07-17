function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    if (inputHipodoge.checked){
        alert("hipodoge seleccionado")
    }else if(inputCapipepo.checked){
        alert("seleccionaste a capipepo")
    }else if(inputRatigueya.checked){
        alert("ratigueya seleccionada")
    }
    else{
        alert("Debes seleccionar algo")
    }
}

window.addEventListener('load', iniciarJuego)
