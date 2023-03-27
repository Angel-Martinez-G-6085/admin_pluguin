function agregar_fechas_no_usadas(input) {
    if(input.value != "") {
        //Creamos elementos del nuevo click
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newButton = document.createElement("button");
        let fechasContenedor = document.querySelector(".fecha_inhabil");
        newDiv.classList.add("fecha_inhabil_admin_container");
        listaFechas.push(input.value);
        newDate.classList.add("fecha_agregada");
        newDate.textContent = input.value;
        newDiv.appendChild(newDate);
        input.value = "";
        //Creacion del boton
        newButton.textContent = "eliminar";
        newButton.classList.add("boton_admin_eliminar");
        newDiv.appendChild(newButton);
        fechasContenedor.appendChild(newDiv);
    }
}

function agregar_horarios(input) {
    if(input.value != "") {
        //Creamos elementos del nuevo click
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newButton = document.createElement("button");
        let horariosContenedor = document.querySelector(".horario_default");
        newDiv.classList.add("horario_default_admin_container");
        horariosDefecto.push(input.value);
        newDate.classList.add("hora_agregada");
        newDate.textContent = input.value;
        newDiv.appendChild(newDate);
        input.value = "";
        //Creacion del boton
        newButton.textContent = "eliminar";
        newButton.classList.add("boton_admin_eliminar_horario");
        newDiv.appendChild(newButton);
        horariosContenedor.appendChild(newDiv);
    }
}

function agregar_fecha_hora_especifica(inputFecha, inputHorario) {
    if(inputFecha.value != "" || inputHorario.value != "") {
        //Creamos elementos del nuevo click
        let objetoFechaHora = {
            fecha: '',
            horarios: []
        };
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newList = document.createElement("ul");
        let newListItem = document.createElement("li");
        let newButton = document.createElement("button");
        let Fechas_y_horariosContenedor = document.querySelector(".horarios_fechas_especificas");

        newDiv.classList.add("fecha_horario_especifico_admin_container");
        objetoFechaHora.fecha = inputFecha.value;
        objetoFechaHora.horarios.push(inputHorario.value);
        listaFechasEspecificas.push(objetoFechaHora);
        newDate.classList.add("hora_agregada");
        newDate.textContent = inputFecha.value;
        newDiv.appendChild(newDate);
        newDiv.appendChild(newList);
        let horario = objetoFechaHora.horarios[0];
        newListItem.textContent = horario;
        newList.appendChild(newListItem);
        inputHorario.value = "";

        //Creacion del boton
        newButton.textContent = "eliminar";
        newButton.classList.add("boton_admin_eliminar_fecha_horario_especifico");
        newDiv.appendChild(newButton);
        Fechas_y_horariosContenedor.appendChild(newDiv);
    }
}

function eliminarBotonesFechas() {
    let botones = document.querySelectorAll(".boton_admin_eliminar");
    botones.forEach(element => {
        element.addEventListener("click", function quienSoy(evento) {
            let padre = this.parentNode;
            eliminarFecha(padre.firstChild.textContent, padre);
        })
    });
}

function eliminarBotonesHorarios() {
    let botones = document.querySelectorAll(".boton_admin_eliminar_horario");
    botones.forEach(element => {
        element.addEventListener("click", function quienSoy(evento) {
            let padre = this.parentNode;
            eliminarHorario(padre.firstChild.textContent, padre);
        })
    });
}

function eliminarFecha(fecha, contenedor) {
    let existe = listaFechas.includes(fecha,0);
    if(existe == true) {
        let indice = listaFechas.indexOf(fecha);
        listaFechas.splice(indice, 1);
        contenedor.remove();
    }
}

function eliminarHorario(horario, contenedor) {
    let existe = horariosDefecto.includes(horario,0);
    if(existe == true) {
        let indice = horariosDefecto.indexOf(horario);
        horariosDefecto.splice(indice, 1);
        contenedor.remove();
    }
}

function fechaEspecificaExiste(fecha, fechas) {
    let objectToFind = {
        fecha: fecha
    }

    if (fechas.some(item => JSON.stringify(item.fecha) === JSON.stringify(objectToFind.fecha))) {
        console.log(item);
    }
}

function agregarHorarioEspecifico(horario) {

}