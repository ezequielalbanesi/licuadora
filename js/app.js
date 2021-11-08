let estadoLicuadora = "apagada";
let sonidoLicuadora = document.getElementById('blender-sound');
let botonLicuadora = document.getElementById('blender-button-sound')


let licuadora = document.getElementById('blender')

function controlarLicuadora () {
	if (estadoLicuadora == "apagada"){
		estadoLicuadora = "encendida";
		sonido()
		licuadora.classList.add("active");
	}

	else{
		estadoLicuadora = "apagada";
		sonido()
		licuadora.classList.remove("active");
	}
}

function sonido(){
	if (sonidoLicuadora.paused){
		botonLicuadora.play()
		sonidoLicuadora.play();
	}
	else{
		botonLicuadora.play();
		sonidoLicuadora.pause();
		sonidoLicuadora.currentTime = 0;
	}
}