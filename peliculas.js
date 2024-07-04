
function mostrarPeliculas(datos) {
    const peliculas = $("#peliculas");
    for (const pelicula of datos) {
        const descripcion = $(`<p class="card-text mt-2">${pelicula.descripcion}</p>`);
        const titulo = $(`<h5 class="card-title">${pelicula.titulo}</h5>`)
        const subtitulo = $(`<h6 class="card-subtitle mb-2 text-body-secondary">${pelicula.director}</h6>`)
        const tarjeta = $('<div class="card m-2 p-3"></div>').append(titulo).append(subtitulo).append(descripcion);

        const ul = $("<ul></ul>");
        for (const actor of pelicula.actores) {
            ul.append($(`<li class="list-group-item"><i class="bi bi-diamond-fill"></i> ${actor}</li>`));
        }
        peliculas.append(tarjeta.append(ul));
    }
}
// Con esto creamos eventos que se aplicarán a elementos aunque no existan en este momento
$(document).on("click", ".card",
    function() { 
        $(this).css("background-color", "antiquewhite") },  
);

$.getJSON("pelis.json", mostrarPeliculas)
.fail((respuesta) => alert("error: " + respuesta.status));
