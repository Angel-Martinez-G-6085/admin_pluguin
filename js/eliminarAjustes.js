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
    if(inputFecha.value != "" && inputHorario.value != "") {
        //Creamos elementos del nuevo click
        let objetoFechaHora = {
            fecha: '',
            horarios: []
        };
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newList = document.createElement("ul");
        newList.classList.add("lista_horarios");
        let newListItem = document.createElement("li");
        newListItem.classList.add("listItemContainer");
        let newButton = document.createElement("button");
        let newButtonHorario = document.createElement("button");
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
        newButtonHorario.textContent = "eliminar horario";
        newButtonHorario.classList.add("admin_eliminar_horario_especifico_button");
        newListItem.appendChild(newButtonHorario);
        inputHorario.value = "";

        //Creacion del boton
        newButton.textContent = "eliminar fecha y horas";
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

function eliminarFechaHoraEspecificoButtons() {
    let botones = document.querySelectorAll(".admin_eliminar_horario_especifico_button");
    botones.forEach(element => {
        element.addEventListener("click", function eliminarHoraBoton(evento) {
            let padre = this.parentNode;
            listaFechasEspecificas.forEach((element) => {
                if(element.horarios.includes(padre.firstChild.textContent)) {
                    let index = element.horarios.indexOf(padre.firstChild.textContent);
                    element.horarios.splice(index, 1);
                    padre.remove();
                }
            });
        })
    });
}

function eliminarFechasHorasEspecificasButtons() {
    let botones = document.querySelectorAll(".boton_admin_eliminar_fecha_horario_especifico");
    botones.forEach((boton) => {
        boton.addEventListener("click", function BotonEliminarHorasFechas() {
            let padre = this.parentNode;
            let fechaEncontrar = padre.firstChild.textContent;
            eliminarFechasHorasEspecificas(fechaEncontrar, padre);
        })
    })
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
        return fecha;
    }
}

function eliminarFechasHorasEspecificas(fecha, contenedor) {
    listaFechasEspecificas.forEach((element) => {
        if(element.fecha == fecha) {
            let index = listaFechasEspecificas.indexOf(element);
            listaFechasEspecificas.splice(index, 1);
            contenedor.remove();
        }
    })
}

function agregarHorarioEspecifico(fecha,horarioNuevo) {
    listaFechasEspecificas.forEach((element, index) => {
        if(element.fecha == fecha) {
            let newButton = document.createElement("button");
            newButton.classList.add("admin_eliminar_horario_especifico_button");
            newButton.textContent = "eliminar horario";
            let containerElement = document.querySelectorAll(".fecha_horario_especifico_admin_container");
            containerElement.forEach((element) => {
                if(element.firstChild.textContent == fecha) {
                    let ulElement = element.children[1];
                    let newItem = document.createElement("li");
                    newItem.classList.add("listItemContainer")
                    let FechaModificar = listaFechasEspecificas[index];
                    FechaModificar.horarios.push(horarioNuevo);
                    newItem.textContent = horarioNuevo;
                    newItem.appendChild(newButton);
                    ulElement.appendChild(newItem);
                    eliminarFechaHoraEspecificoButtons();
                }
            })
        }
    })
}