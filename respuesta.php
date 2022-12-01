<?php
        echo '<!DOCTYPE html>
                <html>
                    <head><title>respuesta</title></head>
                    <body>
        
        ';

        echo '<h1 style="color: green;">Sus datos fueron registrados exitosamente </h1> ';
        
        echo '<button onclick="saludar()"> presioname</button>
              <script>
                    let dato="Hola Mundo !!!";
                    function saludar(){
                        alert("funciona el script enviado desde php. La variable tiene esta información: " + dato);
                    }
              </script>

        ';
        
        
        echo '
                </body>
            </html>
        ';
?>