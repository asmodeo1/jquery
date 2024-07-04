let juegan = Math.floor(Math.random() * 2) == 1 ? "X" : "O";
// Para comprobar si se han juagdo 9 veces
let jugados = 0;
let victoriasX = 0;
let victoriasO = 0;


function guardarVictorias() {
    localStorage.setItem("victoriasX", victoriasX);
    localStorage.setItem("victoriasO", victoriasO);
}

function cargarVictorias() {
    let victoria = localStorage.getItem("victoriasX");
    if(victoria != null){
        victoriasX = victoria;
    }
    victoria = localStorage.getItem("victoriasO");
    if(victoria != null){
        victoriasO = victoria;
    }
    $("#victoriasX").text(victoriasX);
    $("#victoriasO").text(victoriasO);
}

function mostrarResultado(mensaje) {
    const resultado = $("#resultado");
    $("#resultado p:first").text(mensaje);
    resultado.css("display", "block");
    $("#partida").off("click", jugar);
}

function animar(casilla) {
    casilla.css("animation", "");
    // Cogemos el elemento DOM en lugar del jQuery pues este no tiene offsetWidth
    casilla.get(0).offsetWidth;
    casilla.css("animation", "victoria 1s");
}

function comprobarVictoria(c1, c2, c3) {
    if (c1.text() == c2.text() && c1.text() == c3.text() && c1.text() != "") {
        mostrarResultado("Han ganado las " + juegan);
        c1.css("backgroundColor", "red");
        c2.css("backgroundColor", "red");
        c3.css("backgroundColor", "red");
        animar(c1);
        animar(c2);
        animar(c3);
        if(juegan == "X") {
            victoriasX++;
            $("#victoriasX").text(victoriasX);
        } else {
            victoriasO++;
            $("#victoriasO").text(victoriasO);
        }
        guardarVictorias();
        return true;
    }
    return false;
}

function jugar(evt) {
    // evt.target devuelve el ellemento DOM no el objeto jQuery
    if (evt.target.textContent != "") {
        const audio = new Audio("error.mp3");
        audio.play();
        //new Audio("error.mp3").play();
        return;
    }

    evt.target.textContent = juegan;
    jugados++;

    const c1 = $("#c1");
    const c2 = $("#c2");
    const c3 = $("#c3");
    const c4 = $("#c4");
    const c5 = $("#c5");
    const c6 = $("#c6");
    const c7 = $("#c7");
    const c8 = $("#c8");
    const c9 = $("#c9");

    if (comprobarVictoria(c1, c2, c3) || comprobarVictoria(c4, c5, c6) ||
        comprobarVictoria(c7, c8, c9) || comprobarVictoria(c1, c4, c7) ||
        comprobarVictoria(c2, c5, c8) || comprobarVictoria(c3, c6, c9) ||
        comprobarVictoria(c1, c5, c9) || comprobarVictoria(c3, c5, c7)) {
        return true;
    }

    if (jugados == 9) {
        mostrarResultado("Han empatado");
        return;
    }

    if (juegan == "X") {
        juegan = "O";
    } else {
        juegan = "X";
    }
    //juegan = juegan == "X" ? "O" : "X";
    $("#juegan").text(juegan);
}

function cerrarResultado() {
    $("#resultado").css("display", "none");
}

function nuevaPartida() {
    jugados = 0;
    juegan = Math.floor(Math.random() * 2) == 1 ? "X" : "O";
    $("#juegan").text(juegan);
    $(".casilla").css("backgroundColor", "").text("");
    $("#partida").on("click", jugar);
}

function reiniciarPartida() {
    //if(confirm("¿Reiniciar?")) {
    const respuesta = confirm("¿Reiniciar?");
    if(respuesta == true) {
        victoriasO = 0;
        victoriasX = 0;
        $("#victoriasX").text(victoriasX);
        $("#victoriasO").text(victoriasO);
        guardarVictorias();
        nuevaPartida();
    }
}

function inicializar() {
    cargarVictorias();
    $("#juegan").text(juegan);
    $("#partida").on("click", jugar);
    $("#cerrar").on("click", cerrarResultado);
    $("#nueva").on("click", nuevaPartida);
    $("#reiniciar").on("click", reiniciarPartida);
}

inicializar();

