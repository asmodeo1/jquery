
$(document).ajaxError((evt, xhr) => console.log(alert("error: " + xhr.status)));

function mostrarDatos(datos) {
    const contenedor = $("#contenedor");
    for (const tarea of datos) {
        const div = $(`<div><p>${tarea.title}</p><p>${tarea.userId}</p>`).insertAfter('#contenedor');
        if(tarea.completed == true) { // if(tarea.completed) {
            div.css({backgroundColor: "forestgreen", color: "white"});
        }
    }
}

$.getJSON("https://jsonplaceholder.typicode.com/todos", mostrarDatos)





