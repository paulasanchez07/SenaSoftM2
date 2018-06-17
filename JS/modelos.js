



function ejecutarAjax(datos,opc){
	$.ajax({
		type : 'post',
		url : 'PHP/leerRegistro.php',
		data : datos,

		succes : function(response){
			leerDatos(response,opc);
		},
		error : function(xhr,status){
			console.log("ERROR! "+status);
		},

	});
}

function leerDatos(responseJSON, opc){
	var response = parseJSON(responseJSON);

	switch(opc){
		case 1:

		break;
	}
}