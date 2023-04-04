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
	wp_register_script('eliminarAjustsCargados', plugin_dir_url( __FILE__ ) . '/js/eliminarAjustsCargados.js', false);
    wp_register_script('eliminarAjustes', plugin_dir_url( __FILE__ ) . '/js/eliminarAjustes.js', false);
    wp_register_script('calendar', plugin_dir_url( __FILE__ ) . '/js/calendar.js', false);
	wp_register_script('Adminmain', plugin_dir_url( __FILE__ ) . '/js/main.js', array('jquery', 'jqueryUI', 'eliminarAjustsCargados', 'eliminarAjustes','calendar'));
}

function admin_scripts() {
	wp_enqueue_script( 'Adminmain');
}

 function my_admin_menu() {
     add_menu_page( 'Configuracion del calendario', 'Configuracion del calendario', 'manage_options', 'myplugin/myplugin-admin-page.php', 'pluguin_function', 'dashicons-tickets',1);
 }

 function pluguin_function() {
    require_once( plugin_dir_path( __FILE__ ) . '/views/interface.php' );

    ?>
        <script async defer src="https://accounts.google.com/gsi/client"></script>
	<?php
 }


 add_action( 'admin_menu', 'my_admin_menu' );
 add_action( 'wp_loaded', 'register_all_scripts' );
 add_action( 'admin_enqueue_scripts', 'admin_scripts');
 add_action( 'admin_enqueue_scripts', 'admin_styles' );