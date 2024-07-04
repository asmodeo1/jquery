
const colorSeleccionado = "rgb(157, 239, 186)";
let total = 0;

function seleccionar() {
    const producto = $(this);
    // Si estaba ya añadido
    if(producto.css("backgroundColor") == colorSeleccionado) {
        producto.css("backgroundColor", "transparent");

        $("#elegidos li").each( e => {
                if(elegido.data("nombre") == producto.find("nombre").text()) {
                    elegido.remove();
                    total -= parseInt(producto.data("precio"));
                    //break;
                }
            });
        }
    } else {
        // No estaba añadido
        producto.css("backgroundColor", colorSeleccionado);
        const nombre = producto.find(".nombre");
        $("#elegidos").append($(`<li dataset="${nombre.text()}"><span>${nombre.text()}</span><span>${producto.data("precio")}€</span></li>`));
        total += parseInt(producto.data("precio"));
    }
    $("#total").text(total + "€");
}

function vaciar() {
    $("#elegidos").text("");
    total = 0;
    $("#total").text(total + "€");
    // Quitamos el color de fondo de todos los productos por si hubiese alguno seleccionado
    $(".producto").css("backgroundColor", "transparent");
}

$(".producto").on("click", seleccionar);

$("#vaciar").on("click", vaciar);