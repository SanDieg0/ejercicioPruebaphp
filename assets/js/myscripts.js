function cambiarFooter(){
	alert("Hola Mundo !!!!");
	document.getElementById("elfooter").style.backgroundColor="red";
	document.getElementById("elfooter").style.color="yellow";
	document.getElementById("elfooter").style.fontSize = "37px";
	document.getElementById("elfooter").innerHTML ="cambiamos el footer";
}


function cambiartexto1(){
	document.getElementById("parrafoespecial").innerHTML = "adios";
	document.getElementById("parrafoespecial").style.fontSize = "37px";
	document.getElementById("parrafoespecial").style.color = "red";
	document.getElementById("parrafoespecial").style.backgroundColor ="yellow";
}

function cambiartexto2(){
	document.getElementById("parrafoespecial").innerHTML = "hola";
	document.getElementById("parrafoespecial").style.fontSize = "16px";
	document.getElementById("parrafoespecial").style.color = "blue";
	document.getElementById("parrafoespecial").style.backgroundColor = "pink";
}

function cambiarfondo() {
	alert("va a cambiar el fondo");
	document.getElementById("elbody").style.backgroundColor = "Peru";
}


function validarDatos(){
	// alert("funciona el evento onclick");
	let elnombre = document.getElementById("fname").value;
	var elapellido = document.forms["formejemplo"]["lname"].value;
	var elresultado = document.getElementById("resultado");
	let mensaje = "";

	if(elnombre=="" || elapellido==""){
		// alert("LOS DATOS NO PUEDEN ESTAR VACIOS");
		mensaje = "LOS DATOS NO PUEDEN ESTAR VACIOS";
		elresultado.style.color ="red";
		elresultado.style.fontSize = "36px";
	}
	else{
		// alert("El nombre digitado fue : " + elnombre);
		// alert("El apellido digitado fue: " + elapellido);
		mensaje = "El nombre digitado fue : " + elnombre + " El apellido digitado fue: " + elapellido;	
		elresultado.style.color = "green";
		elresultado.style.fontSize = "16px";
	}

	elresultado.innerHTML = mensaje;


}


function cambiarparrafito(){
	// alert("funciona el boton");
	console.log("funciona el boton");

	// cambiamos el estilo de parrafito agregando clases de bootstrap
	let elparrafo = document.getElementById("parrafito");
	if(elparrafo == null || elparrafo== undefined){
		console.log("EL ELEMENTO NO EXISTE PARA SER MANIPULADO");
	}else{
		elparrafo.setAttribute("class", "text-danger fs-2");
	}


	// cambiamos el estilo , pero modificando la propiedad style
	let elparrafo2 = document.getElementById("parrafito2");
	elparrafo2.style.color="Chartreuse";
	elparrafo2.style.fontSize = "38px";

}// fin cambiarparrafito


function sobreescribir(){

	document.write("<h1>SOBREESCRIBIMOS TODO</h1>");
}//fin sobreescribir




function agregar(){
	const nuevoparrafo = document.createElement("p");
	const contenidoparrafo = document.createTextNode("Hola Mundo");
	nuevoparrafo.appendChild(contenidoparrafo);
	document.getElementById("vacio").appendChild(nuevoparrafo);
}



function usemosprompt(){
	let nombre = prompt("ingresa tu nombre");
	document.getElementById("nombrecapturado").innerHTML = nombre;
}
