<?php
/*
 * Plugin Name: admin_pluguin
 */

function admin_styles() {
	wp_enqueue_style( 'jqueryUIStyles', plugin_dir_url( __FILE__ ) . '/css/jquery-ui.min.css' );
	wp_enqueue_style( 'styles', plugin_dir_url( __FILE__ ) . '/css/styles.css' );
}

function register_all_scripts() {
	wp_register_script('jquery', plugin_dir_url( __FILE__ ) . '/libs/jquery.js', false);
	wp_register_script('jqueryUI', plugin_dir_url( __FILE__ ) . '/libs/jquery-ui.js', false);
    wp_register_script('eliminarAjustes', plugin_dir_url( __FILE__ ) . '/js/eliminarAjustes.js', false);
    wp_register_script('calendar', plugin_dir_url( __FILE__ ) . '/js/calendar.js', false);
    wp_register_script('peticionCalendario', plugin_dir_url( __FILE__ ) . '/js/peticionCalendario.js', false);
	wp_register_script('Adminmain', plugin_dir_url( __FILE__ ) . '/js/main.js', array('jquery', 'jqueryUI', 'eliminarAjustes','calendar'));
}

function admin_scripts() {
	wp_enqueue_script( 'Adminmain');
}

 function my_admin_menu() {
     add_menu_page( 'Configuracion del calendario', 'Configuracion del calendario', 'manage_options', 'myplugin/myplugin-admin-page.php', 'pluguin_function', 'dashicons-tickets',1);
 }

 function pluguin_function() {
    ?>
<div class='main-container'>
    <h2 class='administration-title'>Configuracion del calendario</h2>

    <div class='formularios-config-container'>
        <div class='selector-fecha-hora-container'>
            <h2>Configuracion de fecha y hora especificos</h2>
            <div class='calendar-container input-container'>
                <label for='calendario'>Selecciona una fecha</label>
                <input type='text' name='calendario' id='date'>
            </div>

            <div class='time-container input-container'>
                <label for='horario'>Selecciona horario de atención</label>
                <input type='time' name='horario' id='time'>
            </div>

            <div class='selector-fechas-button-container'>
                <button>Agregar fecha y hora</button>
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
        <div class="fecha_inhabil">
            <h2>fechas inhabiles</h2>
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
<script async defer src="https://accounts.google.com/gsi/client"></script>
	<?php
 }

 function my_plugin_variable() {
    return 'Hello, world!';
}


function my_enqueue_scripts() {
    wp_enqueue_script( 'my-script', plugin_dir_url( __FILE__ ) . 'js/my-script.js', array( 'jquery' ) );
    wp_localize_script( 'my-script', 'myPluginData', array(
        'myVariable' => my_plugin_variable()
    ) );
}
add_action( 'wp_enqueue_scripts', 'my_enqueue_scripts' );
 add_action( 'admin_menu', 'my_admin_menu' );
 add_action( 'wp_loaded', 'register_all_scripts' );
 add_action( 'admin_enqueue_scripts', 'admin_scripts');
 add_action( 'admin_enqueue_scripts', 'admin_styles' );