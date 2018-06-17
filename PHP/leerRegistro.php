<?php

$opc = $_POST["opc"];

switch ($opc) {
	case 1:
		
		break;
}


function leerRegistro($sql){
	include("conexion.php");
	$result = $conexion->query($sql);

	$rows = array();

	if($result != NULL || $result->num_rows > 0){
		while (( $r = mysqli_fecth_assoc($result))) {
			$rows[] = $r; 
		}
		mysqli_free_result($result);
	}
	mysqli_close($conexion);

	echo json_encode($rows);
}


function actualizarRegistro($sql){
	include("conexion.php");

	if ($conexion->query($sql) === true) {
		var $ok = array("ok" => "ok");
	}else{
		var $ok = array("ok" => "error");
	}
	echo json_encode($ok);
}
?>