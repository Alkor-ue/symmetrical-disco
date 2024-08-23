<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="HomeStyle.css">
</head>
<body>
        <div class = "Bienvenida">
            <div class="Titulo">
                <H1> Bienvenuto!</H1>
            </div>

            <div class = "Contenido">
                <br>
                <?php 
                    $servidor = "localhost";
                    $usuario = "root";
                    $password = "";
                    $database = "restaurante";

                    $conexion = new mysqli($servidor, $usuario, $password, $database);

                    
                ?>
                <br>
                <!--<div align="center">
                    <img src="Resources\logo.png" height="300" width="416"  >
                </div>
                <br>-->
            </div>
        </div>
        <div align="center">
            <br>
            <?php 
                        if($conexion->connect_error){
                            ?>
                            <img src="Resources\Closed.png" height="200" width="300"  >
                            <?php
                            die();
                        }
                        else{
                            ?>
                            <img src="Resources\Open.png" height="200" width="300"  >
                            <?php
                        }
                    ?>
        </div>
</body>
</html>