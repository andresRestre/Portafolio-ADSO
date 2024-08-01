<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Login</title>
</head>
<body>
    <div id="contenedor">
    <div id="contenedorFormulario">
    <form method="post" action="" id="formulario">
    <div id="divLogin"><h1>Bienvenido a Turclares</h1><br></div>
    
    <div id="divNickname">
            
            <h3>Usuario</h3>
            <input type="text" name="usuario" id="usuarioid"  placeholder="Ingrese su usuario">
        </div>
        <div id="divContraseña">
            <h3>Contraseña</h3>
            <input type="password" name="password" id="passwordid" placeholder="Ingrese su contraseña">
        </div>

        <div id="divIngresar"><input name="btningresar" class="botonIngresar" type="submit" value="REGISTRARME" id="BotonIniciar">
        <br>
        <?php
include("conexion_bd.php");
include("registro_Datos.php");
?>
    </div>

        
    </form>

    <div id="resgistrate">
    <h3>¿Ya estas registrado? <a href="login.php" id="linkresgistro"> Entrar ahora</a></h3>
    </div>


    </div>
    </div>

</body>
</html>