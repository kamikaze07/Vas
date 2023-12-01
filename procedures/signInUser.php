<?php
    include "DbConnect.php";

    $user = $_POST["user"];
    $contra = $_POST["password"];
    $contramd5 = hash("md5",$contra);

    //validamos que el usuario o miembro existe
    $sql1 = "SELECT Usuario FROM Usuarios WHERE Usuario = '$user'";
    $exec1 = mysqli_query($conexion,$sql1);
    $usuario= mysqli_fetch_array($exec1);
    if ($usuario == null) {
        echo json_encode(array("Usuario No Encontrado"));
    }else{
        //si existe validamos que el usuario y contraseña sea correcto
        $consulta = "SELECT Usuario FROM usuarios WHERE (Usuario = '$user' AND Contraseña = '$contramd5')";
        $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");
        $row1 = mysqli_fetch_array($resultado);
        if($row1 == null){
            $str = array("no");
            echo json_encode($str);
        }else{
            $str1 = array($row1['Usuario']) ;
            echo json_encode($str1);
        }
    }
?>