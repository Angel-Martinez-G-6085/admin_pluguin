<?php
function my_variable() {
    return 'Hello, world!';
}
add_filter( 'my_variable_filter', 'my_variable' );
