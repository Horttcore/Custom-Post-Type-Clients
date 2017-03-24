<?php

/**
 * Security, checks if WordPress is running
 **/
if ( !function_exists( 'add_action' ) ) :
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
endif;



/**
*  Plugin
*/
final class Custom_Post_Type_Client
{



	/**
	 * Constructor
	 *
	 * @access public
	 * @since v1.1.0
	 * @author Ralf Hortt
	 **/
	public function __construct()
	{

		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'init', array( $this, 'register_taxonomy' ) );
		add_action( 'plugins_loaded', array( $this, 'load_plugin_textdomain' ) );

	} // END __construct



	/**
	 * Load plugin textdomain
	 *
	 * @access public
	 * @since v1.1.0
	 * @author Ralf Hortt
	 **/
	public function load_plugin_textdomain()
	{

		load_plugin_textdomain( 'custom-post-type-clients', false, dirname( plugin_basename( __FILE__ ) ) . '/../languages/'  );

	} // END load_plugin_textdomain



	/**
	 * Register post type
	 *
	 * @access public
	 * @since v1.1.0
	 * @author Ralf Hortt
	 **/
	public function register_post_type()
	{

		register_post_type( 'client', array(
			'labels' => array(
				'name' => _x( 'Clients', 'post type general name', 'custom-post-type-clients' ),
				'singular_name' => _x( 'Client', 'post type singular name', 'custom-post-type-clients' ),
				'add_new' => _x( 'Add New', 'Client', 'custom-post-type-clients' ),
				'add_new_item' => __( 'Add New Client', 'custom-post-type-clients' ),
				'edit_item' => __( 'Edit Client', 'custom-post-type-clients' ),
				'new_item' => __( 'New Client', 'custom-post-type-clients' ),
				'view_item' => __( 'View Client', 'custom-post-type-clients' ),
				'view_items' => __( 'View Clients', 'custom-post-type-clients' ),
				'search_items' => __( 'Search Clients', 'custom-post-type-clients' ),
				'not_found' =>  __( 'No Clients found', 'custom-post-type-clients' ),
				'not_found_in_trash' => __( 'No Clients found in Trash', 'custom-post-type-clients' ),
				'parent_item_colon' => __( 'Parent Client:', 'custom-post-type-clients' ),
				'all_items' => __( 'All Clients', 'custom-post-type-clients' ),
				'archives' => __( 'Client Archives', 'custom-post-type-clients' ),
				'attributes' => __( 'Client Attributes', 'custom-post-type-clients' ),
				'insert_into_item' => __( 'Insert into client', 'custom-post-type-clients' ),
				'uploaded_to_this_item' => __( 'Uploaded to this client', 'custom-post-type-clients' ),
				'featured_image' => __( 'Featured Image', 'custom-post-type-clients' ),
				'set_featured_image' => __( 'Set featured image', 'custom-post-type-clients' ),
				'remove_featured_image' => __( 'Remove featured image', 'custom-post-type-clients' ),
				'use_featured_image' => __( 'Use as featured image', 'custom-post-type-clients' ),
				'filter_items_list' => __( 'Filter clients list', 'custom-post-type-clients' ),
				'items_list_navigation' => __( 'Clients list navigation', 'custom-post-type-clients' ),
				'items_list' => __( 'Clients list', 'custom-post-type-clients' ),
			),
			'public' => TRUE,
			'publicly_queryable' => TRUE,
			'show_ui' => TRUE,
			'show_in_menu' => TRUE,
			'query_var' => TRUE,
			'rewrite' => array(
				'slug' => _x( 'clients', 'post type slug', 'custom-post-type-clients' ),
				'with_front' => FALSE,
			),
			'capability_type' => 'post',
			'has_archive' => TRUE,
			'hierarchical' => FALSE,
			'menu_position' => NULL,
			'menu_icon' => 'dashicons-businessman',
			'supports' => array( 'title', 'thumbnail', 'page-attributes' )
		) );

	} // END register_post_type



	/**
	 * Register taxonomy
	 *
	 * @access public
	 * @since 1.2.0
	 * @author Ralf Hortt
	 */
	public function register_taxonomy()
	{

		register_taxonomy( 'client-category', array( 'client' ), array(
			'hierarchical' => TRUE,
			'labels' => array(
				'name' => _x( 'Client Categories', 'taxonomy general name', 'custom-post-type-clients' ),
				'singular_name' => _x( 'Client Category', 'taxonomy singular name', 'custom-post-type-clients' ),
				'search_items' =>  __( 'Search Client Categories', 'custom-post-type-clients' ),
				'popular_items' =>  __( 'Popular Client Categories', 'custom-post-type-clients' ),
				'all_items' => __( 'All Client Categories', 'custom-post-type-clients' ),
				'parent_item' => __( 'Parent Client Category', 'custom-post-type-clients' ),
				'parent_item_colon' => __( 'Parent Client Category:', 'custom-post-type-clients' ),
				'edit_item' => __( 'Edit Client Category', 'custom-post-type-clients' ),
				'view_item' => __( 'View Client Category', 'custom-post-type-clients' ),
				'update_item' => __( 'Update Client Category', 'custom-post-type-clients' ),
				'add_new_item' => __( 'Add New Client Category', 'custom-post-type-clients' ),
				'new_item_name' => __( 'New Client Category Name', 'custom-post-type-clients' ),
				'separate_items_with_commas' => __( 'Separate client categories with commas', 'custom-post-type-clients' ),
				'add_or_remove_items' => __( 'Add or remove client categories', 'custom-post-type-clients' ),
				'choose_from_most_used' => __( 'Choose from the most used client categories', 'custom-post-type-clients' ),
				'not_found' => __( 'No client categories found', 'custom-post-type-clients' ),
				'no_terms' => __( 'No client categories', 'custom-post-type-clients' ),
				'items_list_navigation' => __( 'Client Categories list navigation', 'custom-post-type-clients' ),
				'items_list' => __( 'Client Categories list', 'custom-post-type-clients' ),
			),
			'show_ui' => TRUE,
			'query_var' => TRUE,
			'rewrite' => array( 'slug' => _x( 'client-category', 'Client Category Slug', 'custom-post-type-clients' ) ),
			'show_admin_column' => TRUE,
		));

	} // END register_taxonomy



} // END Custom_Post_Type_Client

new Custom_Post_Type_Client;
