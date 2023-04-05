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

function cargarFechaINhabil(fechasNotrabajadas) {
    fechasNotrabajadas.forEach((fechaNoTrabajada) => {
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newButton = document.createElement("button");
        let fechasContenedor = document.querySelector(".fecha_inhabil");
        newDiv.classList.add("fecha_inhabil_admin_container");
        listaFechas.push(fechaNoTrabajada);
        newDate.classList.add("fecha_agregada");
        newDate.textContent = fechaNoTrabajada;
        newDiv.appendChild(newDate);

        //Creacion del boton
        newButton.textContent = "eliminar";
        newButton.classList.add("boton_admin_eliminar_fecha_cargada");
        newDiv.appendChild(newButton);
        fechasContenedor.appendChild(newDiv);
    })
}

function cargar_fecha_hora_especifica() {
    fechasHorasEspecificasCargadas.forEach((element) => {
        listaFechasEspecificas.push(element);
        let newDiv = document.createElement("div");
        let newDate = document.createElement("p");
        let newList = document.createElement("ul");
        newList.classList.add("lista_horarios");
        let newButton = document.createElement("button");
        let Fechas_y_horariosContenedor = document.querySelector(".horarios_fechas_especificas");

        newDiv.classList.add("fecha_horario_especifico_admin_container");
        newDate.classList.add("hora_agregada");
        newDate.textContent = element.fecha;
        newDiv.appendChild(newDate);
        newDiv.appendChild(newList);

        element.horarios.forEach((horario) => {
            let listItem = document.createElement("li");
            let horarioConteiner = document.createElement("p");
            let BotonHorarioEspecificoCargado = document.createElement("button");
            listItem.classList.add("listItemContainer");
            BotonHorarioEspecificoCargado.classList.add("admin_eliminar_horario_especifico_cargado");
            BotonHorarioEspecificoCargado.textContent = "eliminar horario";
            horarioConteiner.textContent = horario;
            listItem.appendChild(horarioConteiner);
            listItem.appendChild(BotonHorarioEspecificoCargado);
            newList.appendChild(listItem);

        });
        //Creacion del boton
        newButton.textContent = "eliminar fecha y horas";
        newButton.classList.add("boton_admin_eliminar_fecha_horario_especifico_cargado");
        newDiv.appendChild(newButton);
        Fechas_y_horariosContenedor.appendChild(newDiv);
    });
}

function eliminarBotonesHorariosCargados() {
    let botones = document.querySelectorAll(".boton_admin_eliminar_horario_cargados");
    botones.forEach((boton) => {
        boton.addEventListener("click", function activarBotonHorarios() {
            let padre = this.parentNode;
            eliminarHorariosCargados(padre.firstChild.textContent, padre);
        })
    })
}

function eliminarBotonesFechasCargadas() {
    let botones = document.querySelectorAll(".boton_admin_eliminar_fecha_cargada");
    botones.forEach((boton) => {
        boton.addEventListener("click", function activarBotonesFechas() {
            let padre = this.parentNode;
            eliminarFechasCargadas(padre.firstChild.textContent, padre);
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

function eliminarFechasCargadas(fecha, contenedor) {
    let existe = listaFechas.includes(fecha,0);
    if(existe == true) {
        let indice = listaFechas.indexOf(fecha);
        listaFechas.splice(indice, 1);
        contenedor.remove();
    }
}

function eliminarFechaHoraEspecificoButtonsCargados() {
    let botones = document.querySelectorAll(".admin_eliminar_horario_especifico_cargado");
    botones.forEach((boton) => {
        boton.addEventListener("click", function eliminarBotonHorasCargadas() {
            let padre = this.parentNode;
            listaFechasEspecificas.forEach((element) => {
                if(element.horarios.includes(padre.firstChild.textContent)) {
                    let index = element.horarios.indexOf(padre.firstChild.textContent);
                    element.horarios.splice(index, 1);
                    padre.remove();
                }
            });
        })
    })
}

function eliminarFechasHorasEspecificasButtonsCargados() {
    let botones = document.querySelectorAll(".boton_admin_eliminar_fecha_horario_especifico_cargado");
    botones.forEach((boton) => {
        boton.addEventListener("click", function BotonEliminarHorasFechas() {
            let padre = this.parentNode;
            let fechaEncontrar = padre.firstChild.textContent;
            eliminarFechasHorasEspecificas(fechaEncontrar, padre);
        })
    })
}