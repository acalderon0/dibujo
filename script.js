
var dibujar = false;
var x = 0;
var y = 0;

$(function() {

    var canvas = $("#lienzo")[0]

    var width = prompt("Introduzca el ancho del lienzo", "500");
    var height = prompt("Introduzca el alto del lienzo", "500");

    canvas.width = width;
    canvas.height = height;

    // Se comprueba si se admite canvas.
    if (canvas.getContext) {
        var cnv = canvas.getContext('2d');

        cnv.strokeStyle = 'black';
        
        $("#lista_colores li button").click(function() {
            color = this.innerText;
            switch (color) {
                case "Rojo":
                    cnv.strokeStyle = 'red';
                    break;
                case "Naranja":
                    cnv.strokeStyle = 'orange';
                    break;
                case "Amarillo":
                    cnv.strokeStyle = 'yellow';
                    break;
                case "Verde":
                    cnv.strokeStyle = 'green';
                    break;
                case "Azul":
                    cnv.strokeStyle = 'blue';
                    break;
                case "Violeta":
                    cnv.strokeStyle = 'violet';
                    break;
                case "Negro":
                    cnv.strokeStyle = 'black';
                    break;
            }
        });


        $("#borrar").click(function() {
            cnv.fillStyle = 'white';
            cnv.fillRect(0, 0, width, height);
        });



        canvas.onmousedown = function(e) {
            
            actualizar_coordenadas(e, canvas);

            dibujar = true;
            cnv.beginPath();
            cnv.moveTo(x, y);

        };

        canvas.onmouseup = function(e) {
            dibujar = false;
            cnv.stroke();
        }

        canvas.onmouseout = function(e) {
            dibujar = false;
        }

        canvas.onmousemove = function(e) {
            if (dibujar == true) {
                actualizar_coordenadas(e, canvas);
                cnv.lineTo(x, y);
                cnv.stroke();
                cnv.beginPath();
                cnv.moveTo(x, y);
            }
        }

    }
    // Si no soporta canvas, informar.
    else {
        alert("Tu navegador no soporta <canvas>");
    }

});


function actualizar_coordenadas(event, canvas) {
    var rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
}