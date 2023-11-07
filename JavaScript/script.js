

const OpcPiedra = document.getElementById("piedra");
const OpcPapel = document.getElementById("papel");
const OpcTijera = document.getElementById("tijera");


const resultado = document.getElementById("resultado");

OpcPiedra.addEventListener("click", () => {
    Jugar("piedra");
});
OpcPapel.addEventListener("click", () => {
    Jugar("papel");
});
OpcTijera.addEventListener("click", () => {
    Jugar("tijera");
});


function Jugar(opcion) {
    const cpu = opcionPC();

    const usuario = opcion;

    const result = resultadoJuego(opcion, cpu);


    if (result === "Empate") {
        resultado.innerHTML = "<p class='empate'>Empate 🤷‍♂️</p>" + "Usted eligió " + usuario + "<br>" + "El PC eligió " + cpu;
    } else if (result === "Ganaste"){
        resultado.innerHTML = "<p class='ganaste'>Ganaste 🥳</p>" + "Usted eligió " + usuario + "<br>" + "El PC eligió " + cpu;
    } else {
        resultado.innerHTML = "<p class='perdiste'>Perdiste 😭</p>" + "Usted eligió " + usuario + "<br>" + "El PC eligió " + cpu;
    }

}

function opcionPC() {
    const random = Math.floor(Math.random() * 3);
    const cpu = ["piedra", "papel", "tijera"][random];
    return cpu;
};

function resultadoJuego(opcion, cpu) {
    if (opcion === cpu) {
        return "Empate";
    }else if (opcion === "piedra" && cpu === "tijera"
    || opcion === "papel" && cpu === "piedra"
    || opcion === "tijera" && cpu === "papel") {
        return "Ganaste";
    }else {
        return "Perdiste";
    }
}