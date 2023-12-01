<?php
    date_default_timezone_set('America/Mexico_City');
    $servername = "localhost";
    $username = "admin";
    $password = "Vas2023.";
    $dbname = "vas";
    $port = "3306";
    
    // Create connection
      $conexion= mysqli_connect($servername,$username,$password,$dbname,$port);
    // Check connection
    if (!$conexion) {
      die("Connection failed: " . mysqli_connect_error());
    }
?>