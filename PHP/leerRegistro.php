<?php

$opc = $_POST["opc"];

switch ($opc) {
	case 1:
		$sql="SELECT clientes.idCliente,clientes.nombreCliente FROM clientes";
		leerRegistro($sql);	
	break;
	case 2:
		$sql="SELECT gruposproductos.codGrupo, gruposproductos.nombreGrupo FROM gruposproductos";
		leerRegistro($sql);	
	break;
	case 3:
	$idCliente = $_POST["idCliente"];
		$sql="SELECT clientes.telefono, empleados.correoE, empleados.nombre, clientes.direccion from clientes join empleados 
			on clientes.empleadoEnlace = empleados.idEmpleado
			where clientes.idCliente = {$idCliente}";
		leerRegistro($sql);	
	break;
	case 4:
	$codGrupo = $_POST["codGrupo"];
		$sql="SELECT productos.codProducto, productos.nombreProducto from productos WHERE codGrupo =  {$codGrupo}";
		leerRegistro($sql);	
	break;
	case 5:
	$codProducto = $_POST["codProducto"];
		$sql="SELECT productos.descripcionProducto, productos.precioVenta, productos.cantidadStock from productos where productos.codProducto = {$codProducto}";
		leerRegistro($sql);	
	break;
	case 6:
		$sql="SELECT MAX(idPedido)+1  as pedido, curdate() as fecha from pedidos";
		leerRegistro($sql);	
	break;
}


function leerRegistro($sql){
	include("conexion.php");
	$result = $conexion->query($sql);

	$rows = array();

	if($result != NULL && $result->num_rows > 0){
		while (($r = mysqli_fetch_assoc($result))) {
			$rows[] = $r; 
		}
		mysqli_free_result($result);
	}
	//var_dump($rows);
	mysqli_close($conexion);
	echo json_encode($rows);
}


function actualizarRegistro($sql){
	include("conexion.php");

	if ($conexion->query($sql) === true) {
		$ok = array("ok" => "ok");
	}else{
		$ok = array("ok" => "error");
	}
	echo json_encode($ok);
}
?>