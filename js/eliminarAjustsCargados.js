function cargarHorarios(horariosCargados) {
    horariosCargados.forEach((horario) => {
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newButton = document.createElement("button");
        horariosDefecto.push(horario);
        let horariosContenedor = document.querySelector(".horario_default");
        newDate.classList.add("hora_agregada");
        newDate.textContent = horario;
        newDiv.appendChild(newDate);

        // Creacion del boton
        newButton.textContent = "eliminar";
        newButton.classList.add("boton_admin_eliminar_horario_cargados");
        newDiv.appendChild(newButton);
        horariosContenedor.appendChild(newDiv);
    });
}

function eliminarBotonesHorariosCargados() {
    let botones = document.querySelectorAll(".boton_admin_eliminar_horario_cargados");
    botones.forEach((boton) => {
        boton.addEventListener("click", function activarBoton() {
            let padre = this.parentNode;
            eliminarHorariosCargados(padre.firstChild.textContent, padre);
        })
    })
}

function eliminarHorariosCargados(horario, contenedor) {
    let existe = horariosDefecto.includes(horario,0);
    if(existe == true) {
        let indice = horariosDefecto.indexOf(horario);
        horariosDefecto.splice(indice, 1);
        contenedor.remove();
    }
}