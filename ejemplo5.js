function mostrarDatos(datos) {
    // Esta API siempre devuelve un atributo error (valor true si hubo error y false si no)
    if(datos.error) {
        alert(datos.msg); // msg es un atributo de la api con el mensaje de error
        return;
    }
    
    $("#contenedor").replaceWith($(`<p>${datos.data.name}</p><img src="${datos.data.flag}" width=100px" alt="${datos.data.name}">`));
}

function mostrarError(error) {
    alert(error);
}

function obtenerBandera() {
    const codigo = $("#codigo");
    // Necesitamos el elemento DOM ya que el objeto jQuery no tiene checkValidity
    if(codigo.get(0).checkValidity() == false) {
        alert("Introduce el codigo");
        return;
    }
    $("#obtener").disabled = true;

    $.post("https://countriesnow.space/api/v0.1/countries/flag/images", {iso2: codigo.val()}, mostrarDatos)
    .fail(() => mostrarError()) // fail cuando haya un error
    .always(() => $("obtener").disabled = false); // always se ejecuta siempre haya ido bien o mal la petición
}

$("#obtener").on("click", obtenerBandera);





