function PiedraPapelTijera() {
    
    // variable
    let jugar = true;

    //mientras
    while (jugar) {
        
        const opciones = ["piedra", "papel", "tijera"];
        const seleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

        const seleccionUsuario = prompt("Elige una opción: piedra, papel o tijera").toLowerCase();

        if (!opciones.includes(seleccionUsuario)) {
            alert("Por favor, elige una opción válida.");
            continue;
        }

        alert(`La máquina eligió: ${seleccionMaquina}`);

        if (seleccionUsuario === seleccionMaquina) {
            alert("¡Es un empate!");
        } else if (
            (seleccionUsuario === "piedra" && seleccionMaquina === "tijera") ||
            (seleccionUsuario === "papel" && seleccionMaquina === "piedra") ||
            (seleccionUsuario === "tijera" && seleccionMaquina === "papel")
        ) {
            alert("¡Ganaste!");
        } else {
            alert("¡La máquina ganó!");
        }

        jugar = confirm("¿Te gustaría volver a jugar?");
    
    }
}

PiedraPapelTijera();