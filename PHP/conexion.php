<?php
	$conexion =  new mysqli("localhost","root","","modelosclasicos");
	if($conexion->connect_error){
		die("Error en la conexion". $conexion->connect_error);
	}
?>