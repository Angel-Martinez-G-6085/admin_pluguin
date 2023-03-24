const listaFechas = [];
const horariosDefecto = [];

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        const fechainhabilButton = document.querySelector(".fecha_inhabil_button");
        const fechainhabilInput = document.querySelector(".fecha_inhabil_input");

        const horariodefaultButton = document.querySelector(".horario_default_button");
        const horariodefaultInput = document.querySelector(".horario_defecto_input");
        const enviarDatosButton = document.querySelector(".formulario_admin_enviar_datos_button")
        jQuery( "#date" ).datepicker({
            minDate: 0,
            dateFormat: "yy-mm-dd",
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
            beforeShowDay: jQuery.datepicker.noWeekends
        });

        jQuery( "#calendario-inhabiles" ).datepicker({
            minDate: 0,
            dateFormat: "yy-mm-dd",
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
            beforeShowDay: jQuery.datepicker.noWeekends
        });

        fechainhabilButton.addEventListener("click", () =>{
            agregar_fechas_no_usadas(fechainhabilInput);
            eliminarBotonesFechas();
        });

        horariodefaultButton.addEventListener("click", () => {
            agregar_horarios(horariodefaultInput);
            eliminarBotonesHorarios();
        })

        enviarDatosButton.addEventListener("click", () => {
            mandar_datos_calendario();
        })

        function mandar_datos_calendario() {
            fetch('http://localhost/www/frecuentum/wp-admin/admin-ajax.php', {
                headers : {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: '{"nombre": "angel"}'
            })
            .then((data) => console.log(data))
        }
    }
};