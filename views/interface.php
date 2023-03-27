
<div class='main-container'>
    <h2 class='administration-title'>Configuracion del calendario</h2>

    <div class='formularios-config-container'>
        <div class='selector-fecha-hora-container'>
            <h2>Configuracion de fecha y hora especificos</h2>
            <div class='calendar-container input-container'>
                <label for='calendario'>Selecciona una fecha</label>
                <input class="fecha_especifica_input" type='text' name='calendario' id='date'>
            </div>

            <div class='time-container input-container'>
                <label for='horario'>Selecciona horario de atención</label>
                <input class="hora_especifica_input" type='time' name='horario' id='time'>
            </div>

            <div class='selector-fechas-button-container'>
                <button class="button_fecha_y_hora_especifica">Agregar fecha y hora</button>
            </div>
        </div>

        <div class='selector-fecha-inabiles'>
            <h2>Configuracion de fechas inhabiles</h2>
            <div class='calendar-container input-container'>
                <label for='calendario-inhabil'>Selecciona una fecha</label>
                <input class="fecha_inhabil_input" type='text' name='calendario-inhabil' id='calendario-inhabiles'>
            </div>

            <div class='selector-fechas-button-container'>
                <button class="fecha_inhabil_button">Agregar fecha</button>
            </div>
        </div>

        <div class='selector-fecha-inabiles'>
            <h2>Configuracion de horarios por defecto</h2>
            <div class='calendar-container input-container'>
                <label for='calendario-inhabil'>Selecciona un horario</label>
                <input class="horario_defecto_input" type='time' name='horario_defecto' id='calendario-inhabiles'>
            </div>

            <div class='selector-fechas-button-container'>
                <button class="horario_default_button">Agregar horario</button>
            </div>
        </div>
    </div>

    <div class="formularios-results-container">
		<div class="horarios_fechas_especificas">
            <h2>Fechas y horas particulares</h2>
        </div>

        <div class="fecha_inhabil">
            <h2>Fechas inhabiles</h2>
        </div>

        <div class="horario_default">
            <h2>Horarios por defecto</h2>
        </div>
    </div>

        <div class="formulario_admin_enviar_datos_container">
        <button class="formulario_admin_enviar_datos_button">Enviar Datos</button>
    </div>
    <div>
        <button id="authorize_button" class="login">Iniciar con Google</button>
        <button id="signout_button" class="signOut">Cerrar Sesión</button>
    </div>
</div>