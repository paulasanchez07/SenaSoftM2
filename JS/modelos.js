
function ejecutarAjax(datos,opc){
	$.ajax({
		type : 'post',
		url : 'php/leerRegistro.php',
		data : datos,

		success : function(response){
			leerDatos(response,opc);
		},
		error : function(xhr,status){
			console.log("ERROR! "+status);
		},

	});
}

function leerDatos(responseJSON, opc){
	var response = JSON.parse(responseJSON);
	switch(opc){
		case 1:
			if (response.length > 0 ) {
				cargarSelectClientes(response);
			}else{
				alert("error opc 1");
			}
		break;
		case 2:
			if (response.length > 0 ) {
				cargarSelectGrupos(response);
			}else{
				alert("error opc 2");
			}
		break;
		case 3:
			if (response.length > 0 ) {
				cargarDatosCliente(response);
			}else{
				alert("error opc 3");
			}
		break;
		case 4:
			if (response.length > 0 ) {
				cargarSelectProductos(response);
			}else{
				alert("error opc 4");
			}
		break;
		case 5:
			if (response.length > 0 ) {
				cargarDatosProducto(response);
			}else{
				alert("error opc 5");
			}
		break;
		case 6:
			if (response.length > 0 ) {
				cargarNumPedido(response);
			}else{
				alert("error opc 5");
			}
		break;
	}
}


function consultarDatosPedido(){
	consultarClientes();
	consultarGrupos();
	cargarSelectCantidad();
	consultarNumPedido();
}

function consultarClientes(){
	var parametros = {"opc":1};
	ejecutarAjax(parametros,1);
}

function consultarGrupos() {
	var parametros = {"opc":2};
	ejecutarAjax(parametros,2);
}

function consultarCliente(select){
	var parametros = {"opc": 3, "idCliente" : select.value};
	ejecutarAjax(parametros,3);
}

function consultarProductos(select){
	var parametros = {"opc": 4, "codGrupo" : select.value};
	ejecutarAjax(parametros,4);
}

function consultarDatosProducto(select){
	var parametros = {"opc": 5, "codProducto" : select.value};
	ejecutarAjax(parametros,5);
}

function consultarNumPedido(){
	var parametros = {"opc":6};
	ejecutarAjax(parametros,6);
}

function cargarSelectClientes(response){
	var txt = "<option value='0'>Seleccione</option>";
	for(var i = 0; i < response.length; i++){
		txt += "<option value='"+response[i]['idCliente']+"'>"+response[i]['nombreCliente']+"</option>";
	}
	$("#selectCliente").html(txt);
}

function cargarSelectGrupos(response){
	var txt = "<option value='0'>Seleccione</option>";
	for(var i = 0; i < response.length; i++){
		txt += "<option value='"+response[i]['codGrupo']+"'>"+response[i]['nombreGrupo']+"</option>";
	}
	$("#selectGrupo").html(txt);
}

function cargarDatosCliente(response){
	$("#txtTelefono").val(response[0]["telefono"]);
	$("#txtCorreo").val(response[0]["correoE"]);
	$("#txtEnlace").val(response[0]["nombre"]);
	$("#txtDireccion").val(response[0]["direccion"]);
}

function cargarSelectProductos(response){
	var txt = "<option value='0'>Seleccione</option>";
	for(var i = 0; i < response.length; i++){
		txt += "<option value='"+response[i]['codProducto']+"'>"+response[i]['nombreProducto']+"</option>";
	}
	$("#selectProducto").html(txt);
}

function cargarSelectCantidad(response){
	var txt = "<option value='1'>1</option>";
	for(var i = 2; i < 11; i++){
		txt += "<option value='"+i+"'>"+i+"</option>";
	}
	$("#selectCantidad").html(txt);
}

function cargarDatosProducto(response){
	$("#txtDescripcion").val(response[0]["descripcionProducto"]);
	$("#txtPrecio").val(response[0]["precioVenta"]);
	$("#txtStock").val(response[0]["cantidadStock"]);
}

function cargarNumPedido(response){
	$("#txtNumPedido").val(response[0]["pedido"]);
	$("#txtFecha").val(response[0]["fecha"]);
}

//Agrega el producto a la tabla
function agregarProducto(){

}