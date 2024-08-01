<?php

if(!empty($_POST["btningresar"])){
    if (empty($_POST["usuario"]) and empty($_POST["password"])) {
        echo "* Los campos estan vacios *";
    } else {
        $usuario=$_POST["usuario"];
        $password=$_POST["password"];
        $sql=$conexion->query("select * from datosusuarios where nickUsuario='$usuario' and contraseñUsuario='$password'");
        if ($datos=$sql->fetch_object()) {
            header("location:indexViajes.html");
        } else {
            echo "* Usuario o contraseña invalidos *";
        }
        
   

    }
    
}

?>