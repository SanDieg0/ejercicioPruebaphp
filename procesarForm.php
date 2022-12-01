<?php
    echo '<h1>FUNCIONA PHP</h1>';
    $elnombre = $_GET['camponombre'];
    $elapellido = $_GET['campoapellido'];
    
    echo '<p>Usted envio '.$elnombre.' desde el formulario</p>';
    echo '<p>Usted envio '.$elapellido.' desde el formulario</p>';
    
    // EL SCRIPT REALIZA TODO EL PROCESO DE ALMACENAMIENTO EN LA BASE DE DATOS
    // Y LUEGO REDIRECCIONA A UNA PAGINA DE RESPUESTA PREDISEÑADA 
    
    header("Location: respuesta.php");
?>