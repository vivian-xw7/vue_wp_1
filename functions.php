<?php 
function enqueue_vue_assets() {
    // Enqueue Vue.js
    wp_enqueue_script('vue', get_template_directory_uri() . '/app.js', array(), null, true);

    // Enqueue Vue.js styles
    wp_enqueue_style('vue-styles', get_template_directory_uri() . '/app.css');
}

add_action('wp_enqueue_scripts', 'enqueue_vue_assets');
?>
