const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainer = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoriaSelect");

function quitarClaseError() {
	let inputFormulario = document.querySelectorAll(".form-control, .form-select");
	for (let i = 0; i < inputFormulario.length; i++) {
		inputFormulario[i].classList.remove('is-invalid');
	}
}



function totalPagar() {
	quitarClaseError();

//Validación formulario

if (nombre.value === "") {
	alert("Por favor, escriba su nombre");
	nombre.classList.add('is-invalid');
	nombre.focus();
	return;
}

if (apellido.value === "") {
	alert("Por favor, escriba su apellido");
	apellido.classList.add('is-invalid');
	apellido.focus();
	return;
}


if (correo.value === "") {
	alert("Por favor, escriba su correo");
	correo.classList.add('is-invalid');
	correo.focus();
	return;
}

const emailValido = mail => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); 
}

if (!emailValido(correo.value)) {
	alert("Ingresa un correo válido");
	correo.classList.add("is-invalid");
	correo.focus();
	return;
}


if (cantidad.value < 1) {
	alert("Por favor, ingrese una cantidad válida");
	cantidad.classList.add('is-invalid');
	cantidad.focus();
	return;
}

/* Descuentos y totales*/

let totalValorTickets = (cantidad.value) * valorTicket;

if (categoria.value == 0) {
	totalValorTickets = totalValorTickets;
}

if (categoria.value == 1) {
	totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
}

if (categoria.value == 2) {
	totalValorTickets = totalValorTickets - (descuentoTrainer / 100 * totalValorTickets);
}

if (categoria.value == 3) {
	totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
}

/* -------------------Acá está el switch que no me funciona con los descuentos, siempre pone el valor de $200
switch (categoria.value)
{
case 0:
	totalValorTickets = totalValorTickets;
	break;
case 1:
	totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
	break;
case 2:
	totalValorTickets = totalValorTickets - (descuentoTrainer / 100 * totalValorTickets);
	break;

case 3:
	totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
	break;
}*/

totalPago.innerHTML = totalValorTickets;

}

// Botones
resumen.addEventListener('click', totalPagar);

function resetTotalPagar() {
	quitarClaseError();
	totalPagar.innerHTML = "";
}

borrar.addEventListener('click', resetTotalPagar);
