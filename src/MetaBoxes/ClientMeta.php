<?php

namespace Horttcore\CustomPostTypeClients\MetaBoxes;

use Horttcore\MetaBoxes\MetaBox;

class ClientMeta extends MetaBox
{
    /**
     * Construct.
     *
     * @since 1.0.0
     **/
    public function __construct()
    {
        $this->identifier = 'post-icon';
        $this->name = __('Information', 'custom-post-type-clients');
        $this->screen = 'client';
        $this->context = 'side';
    }

    /**
     * Register meta.
     *
     * @return void
     **/
    public function registerMeta()
    {
        register_meta('post', '_url', [
            'object_subtype'    => 'client',
            'sanitize_callback' => 'esc_url_raw',
            'type'              => 'string',
            'description'       => __('Client website url', 'custom-post-type-clients'),
            'show_in_rest'      => true,
        ]);

        register_rest_field('client', 'website', [
            'get_callback' => function ($object) {
                return esc_url_raw(get_post_meta($object['id'], '_url', true));
            },
        ]);
    }

    /**
     * Render the meta box.
     *
     * @param WP_Post $post Post object
     *
     * @return void
     *
     * @since 1.0.0
     */
    public function render(\WP_Post $post)
    {
        ?>
        <table class="form-table">
            <tr>
                <th>
                    <label for="client-url"><?php _e('URL', 'custom-post-type-clients'); ?></label>
                </th>
                <td>
                    <input type="text" name="client-url" id="client-url" value="<?php echo esc_attr(get_client_url($post->ID)) ?>">
                </td>
            </tr>
        </table>
        <?php
    }

    /**
     * Register post type.
     *
     * @param int $postId Post ID
     *
     * @return void
     *
     * @since 1.0.0
     */
    public function save(int $postId)
    {
        update_post_meta($postId, '_url', esc_url_raw($_POST['client-url']));
    }
}
