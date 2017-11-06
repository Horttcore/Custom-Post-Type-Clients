<?php
/**
 * Security, checks if WordPress is running
 **/
if (!function_exists( 'add_action' )) :
    header( 'Status: 403 Forbidden' );
    header( 'HTTP/1.1 403 Forbidden' );
    exit();
endif;



/**
*  Plugin
*/
final class Custom_Post_Type_Clients_Admin
{



    /**
     * Constructor
     *
     * @access public
     * @return void
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function __construct()
    {

        add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
        add_filter( 'manage_client_posts_columns', array( $this, 'manage_client_posts_columns' ) );
        add_action( 'manage_client_posts_custom_column', array($this,'manage_client_posts_custom_column'), 10, 2 );
        add_filter( 'post_updated_messages', array( $this, 'post_updated_messages' ) );
        add_action( 'save_post', array( $this, 'save_post' ) );
    } // END __construct



    /**
     * Meta box
     *
     * @access public
     * @return void
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function add_meta_boxes()
    {

        add_meta_box( 'client-meta', __( 'Information', 'custom-post-type-clients' ), array( $this, 'meta_box' ), 'client' );
    } // END add_meta_boxes
    


        /**
     * Add management columns
     *
     * @access public
     * @param str $column Column name
     * @param int $post_id Post ID
     * @return void
     * @since v2.0
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function manage_client_posts_custom_column($column, $post_id)
    {
        switch ($column) :
            case 'logo':
                the_post_thumbnail();
                break;
            case 'url':
                echo make_clickable( get_client_url( $post_id ) );
                break;
        endswitch;
    }



    /**
     * Add management columns
     *
     * @access public
     * @param array $columns Columns
     * @return array
     * @since v2.0
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function manage_client_posts_columns($columns)
    {

        $columns['logo'] = __( 'Logo', 'custom-post-type-clients' );
        $columns['url'] = __( 'URL', 'custom-post-type-clients' );
        return $columns;
    } // END manage_client_posts_columns




    /**
     * Clients meta box
     *
     * @access public
     * @param obj $post Post object
     * @return void
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function meta_box($post)
    {

        $meta = get_post_meta( $post->ID, '_meta', true );
        wp_nonce_field( 'save-client-meta', 'client-meta-nounce' );

        ?>

        <table class="form-table">
            <tr>
                <th><label for="client-url"><?php _e( 'URL', 'custom-post-type-clients' ); ?></label></th>
                <td><input type="text" class="regular-text" name="client-url" id="client-url" value="<?php if (isset( $meta['url'] )) {
                    echo esc_url_raw( $meta['url'] );
} ?>"></td>
            </tr>
        </table>

        <?php
    } // END meta_box



    /**
     * Post updated messages
     *
     * @access public
     * @param array $messages Update Messages
     * @return array Update Messages
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function post_updated_messages($messages)
    {

        $post             = get_post();
        $post_type        = 'client';
        $post_type_object = get_post_type_object( $post_type );

        $messages[$post_type] = array(
            0  => '', // Unused. Messages start at index 1.
            1  => __( 'Clients updated.', 'custom-post-type-clients' ),
            2  => __( 'Custom field updated.' ),
            3  => __( 'Custom field deleted.' ),
            4  => __( 'Clients updated.', 'custom-post-type-clients' ),
            /* translators: %s: date and time of the revision */
            5  => isset( $_GET['revision'] ) ? sprintf( __( 'Clients restored to revision from %s', 'custom-post-type-clients' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
            6  => __( 'Clients published.', 'custom-post-type-clients' ),
            7  => __( 'Clients saved.', 'custom-post-type-clients' ),
            8  => __( 'Clients submitted.', 'custom-post-type-clients' ),
            9  => sprintf( __( 'Clients scheduled for: <strong>%1$s</strong>.', 'custom-post-type-clients' ), date_i18n( __( 'M j, Y @ G:i', 'custom-post-type-clients' ), strtotime( $post->post_date ) ) ),
            10 => __( 'Clients draft updated.', 'custom-post-type-clients' )
        );

        if (!$post_type_object->publicly_queryable) {
            return $messages;
        }

        $permalink = get_permalink( $post->ID );

        $view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View client', 'custom-post-type-clients' ) );
        $messages[$post_type][1] .= $view_link;
        $messages[$post_type][6] .= $view_link;
        $messages[$post_type][9] .= $view_link;

        $preview_permalink = add_query_arg( 'preview', 'true', $permalink );
        $preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview client', 'custom-post-type-clients' ) );
        $messages[$post_type][8]  .= $preview_link;
        $messages[$post_type][10] .= $preview_link;

        return $messages;
    } // END post_updated_messages


    /**
     * Callback to save the client meta data
     *
     * @access public
     * @param int $post_id Post ID
     * @return void
     * @author Ralf Hortt <me@horttcore.de>
     **/
    public function save_post($post_id)
    {

        if (defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE) {
            return;
        }

        if (!isset( $_POST['client-meta-nounce'] ) || !wp_verify_nonce( $_POST['client-meta-nounce'], 'save-client-meta' )) {
            return;
        }

        update_post_meta( $post_id, '_meta', array(
            'url' => esc_url_raw( $_POST['client-url'] )
        ) );
    } // END save_post
} // END final class Custom_Post_Type_Clients_Admin

new Custom_Post_Type_Clients_Admin();
