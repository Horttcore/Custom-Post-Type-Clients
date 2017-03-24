<?php
/**
 * Plugin Name: Custom Post Type Clients
 * Plugin URI: https://horttcore.de
 * Description: Manage clients
 * Version: 1.0.0
 * Author: Ralf Hortt
 * Author URI: https://horttcore.de
 * Text Domain: custom-post-type-clients
 * Domain Path: /languages/
 * License: GPL2
 */

require( 'classes/custom-post-type-clients.php' );

if ( is_admin() )
	require( 'classes/custom-post-type-clients.admin.php' );
