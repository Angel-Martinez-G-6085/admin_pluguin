const listaFechas = [];
const horariosDefecto = [];
const listaFechasEspecificas = [];

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        const fechainhabilButton = document.querySelector(".fecha_inhabil_button");
        const fechainhabilInput = document.querySelector(".fecha_inhabil_input");

        const horariodefaultButton = document.querySelector(".horario_default_button");
        const horariodefaultInput = document.querySelector(".horario_defecto_input");

        const AgregarFechasHorasEspecificas = document.querySelector(".button_fecha_y_hora_especifica");
        const FechaEspecificaInput = document.querySelector(".fecha_especifica_input");
        const HoraEspecificaInput = document.querySelector(".hora_especifica_input");
        const enviarDatosButton = document.querySelector(".formulario_admin_enviar_datos_button");

        let holiDays = listaFechas;
        function disableHoliday(date) {
            let string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            let filterDate = new Date(string);
            let day = filterDate.getDay();
            let isHoliday = (jQuery.inArray(string, holiDays) != -1);
            return [day != 6 && day !=5 && !isHoliday]
         }

        jQuery( "#date" ).datepicker({
            minDate: 0,
            dateFormat: "yy-mm-dd",
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
            beforeShowDay: disableHoliday
        });

        jQuery( "#calendario-inhabiles" ).datepicker({
            minDate: 0,
            dateFormat: "yy-mm-dd",
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
            beforeShowDay: disableHoliday
        });

        fechainhabilButton.addEventListener("click", () =>{
            agregar_fechas_no_usadas(fechainhabilInput);
            eliminarBotonesFechas();
        });

        horariodefaultButton.addEventListener("click", () => {
            agregar_horarios(horariodefaultInput);
            eliminarBotonesHorarios();
        })

        AgregarFechasHorasEspecificas.addEventListener("click", () => {
            console.log("hora y fechas especificos agregados");
            if(fechaEspecificaExiste(FechaEspecificaInput.value, listaFechasEspecificas) == true) {
                console.log("esta fecha ya fue agregada")
            }
            agregar_fecha_hora_especifica(FechaEspecificaInput, HoraEspecificaInput);
        })

        enviarDatosButton.addEventListener("click", () => {
            localStorage.setItem("fechas",JSON.stringify(listaFechas));
            localStorage.setItem("horarios",JSON.stringify(horariosDefecto));
        })
    }
};