<?php
/*
Plugin Name: Custom Post Type Clients
Plugin URL: https://github.com/Horttcore/Custom-Post-Type-Clients
Description:
Version: 0.2
Author: Ralf Hortt
Author URL: http://horttcore.de/
*/



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
class Custom_Post_Type_Client
{



	/**
	 * Constructor
	 *
	 * @access public
	 * @author Ralf Hortt
	 * @since 0.1
	 **/
	public function __construct()
	{
		add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_filter( 'post_updated_messages', array( $this, 'post_updated_messages' ) );
		add_action( 'save_post', array( $this, 'save_post' ) );

		load_plugin_textdomain( 'cpt-clients', FALSE, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}



	/**
	 * Add meta boxes
	 *
	 * @access public
	 * @author Ralf Hortt
	 * @since 0.1
	 **/
	public function add_meta_boxes()
	{
		add_meta_box( 'client-meta', __( 'Information', 'cpt-clients' ), array( $this, 'meta_box' ), 'client' );
	}



	/**
	 * Client meta box
	 *
	 * @access public
	 * @param obj $post Post object
	 * @author Ralf Hortt
	 * @since 0.1
	 **/
	public function meta_box( $post )
	{
		$meta = get_post_meta( $post->ID, '_meta', TRUE );
		wp_nonce_field( 'save-client-meta', 'client-meta-nounce' );
		?>
		<table class="form-table">
			<?php do_action( 'cpt-clients-information-meta-box-before', $post ) ?>
			<tr>
				<th><label for="client-url"><?php _e( 'URL', 'cpt-clients' ); ?></label></th>
				<td><input type="text" name="client-url" id="client-url" value="<?php echo esc_url( $meta['url'] ) ?>"></td>
			</tr>
			<?php do_action( 'cpt-clients-information-meta-box-after', $post ) ?>
		</table>
		<?php
	}



	/**
	 * Post updated messages
	 *
	 * @param array $messages Update Messages
	 * @return array $messages Update Messages
	 * @author Ralf Hortt
	 * @since 0.1
	 **/
	public function post_updated_messages( array $messages )
	{
		global $post, $post_ID;

		$messages['client'] = array(
			0 => '', // Unused. Messages start at index 1.
			1 => sprintf( __('Client updated. <a href="%s">View client</a>', 'cpt-clients'), esc_url( get_permalink($post_ID) ) ),
			2 => __('Custom field updated.', 'cpt-clients'),
			3 => __('Custom field deleted.', 'cpt-clients'),
			4 => __('Client updated.', 'cpt-clients'),
			/* translators: %s: date and time of the revision */
			5 => isset($_GET['revision']) ? sprintf( __('Client restored to revision from %s', 'cpt-clients'), wp_post_revision_title( (int) $_GET['revision'], FALSE ) ) : FALSE,
			6 => sprintf( __('Client published. <a href="%s">View client</a>', 'cpt-clients'), esc_url( get_permalink($post_ID) ) ),
			7 => __('Client saved.', 'cpt-clients'),
			8 => sprintf( __('Client submitted. <a target="_blank" href="%s">Preview client</a>', 'cpt-clients'), esc_url( add_query_arg( 'preview', 'TRUE', get_permalink($post_ID) ) ) ),
			9 => sprintf( __('Client scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview client</a>', 'cpt-clients'), date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
			10 => sprintf( __('Client draft updated. <a target="_blank" href="%s">Preview client</a>', 'cpt-clients'), esc_url( add_query_arg( 'preview', 'TRUE', get_permalink($post_ID) ) ) ),
		);

		return $messages;
	}



	/**
	 * Register post type
	 *
	 * @access public
	 * @author Ralf Hortt
	 * @since 0.1
	 **/
	public function register_post_type()
	{
		$labels = array(
			'name' => _x( 'Clients', 'post type general name', 'cpt-clients' ),
			'singular_name' => _x( 'Client', 'post type singular name', 'cpt-clients' ),
			'add_new' => _x( 'Add New', 'Client', 'cpt-clients' ),
			'add_new_item' => __( 'Add New Client', 'cpt-clients' ),
			'edit_item' => __( 'Edit Client', 'cpt-clients' ),
			'new_item' => __( 'New Client', 'cpt-clients' ),
			'all_items' => __( 'All Clients', 'cpt-clients' ),
			'view_item' => __( 'View Client', 'cpt-clients' ),
			'search_items' => __( 'Search Clients', 'cpt-clients' ),
			'not_found' =>  __( 'No Clients found', 'cpt-clients' ),
			'not_found_in_trash' => __( 'No Clients found in Trash', 'cpt-clients' ),
			'parent_item_colon' => '',
			'menu_name' => __( 'Clients', 'cpt-clients' )
		);

		$args = array(
			'labels' => $labels,
			'public' => FALSE,
			'publicly_queryable' => FALSE,
			'show_ui' => TRUE,
			'show_in_menu' => TRUE,
			'query_var' => TRUE,
			'rewrite' => TRUE,
			'capability_type' => 'post',
			'has_archive' => FALSE,
			'hierarchical' => FALSE,
			'menu_position' => NULL,
			'menu_icon' => plugins_url( 'images/menu-icon.png', __FILE__ ),
			'supports' => array( 'title', 'thumbnail', 'page-attributes' )
		);

		register_post_type( 'client', $args );
	}



	/**
	 * Callback to save the client meta data
	 *
	 * @access public
	 * @param int $post_id Post ID
	 * @author Ralf Hortt
	 * @since 0.1
	 **/
	public function save_post( $post_id )
	{
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
			return;

		if ( !wp_verify_nonce( $_POST['client-meta-nounce'], 'save-client-meta' ) )
			return;

		update_post_meta( $post_id, '_meta', array(
			'url' => sanitize_textfield( $_POST['client-url'] )
		) );
	}



}

new Custom_Post_Type_Client;
