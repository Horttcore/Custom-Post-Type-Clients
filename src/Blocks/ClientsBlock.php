<?php

namespace Horttcore\CustomPostTypeClients\Blocks;

class ClientsBlock
{
    /**
     * Register hooks.
     *
     * @todo Refactor in a composer package
     *
     * @return void
     **/
    public function register()
    {
        register_block_type('horttcore/clients', [
            'render_callback' => function ($attributes) {
                return $this->render($attributes);
            },
        ]);
    }

    /**
     * Render the meta box.
     *
     * @param mixed $attributes Attributes
     *
     * @return string HTML output
     *
     * @since 1.0.0
     */
    public function render($attributes)
    {
        ob_start();

        $attributes = wp_parse_args($attributes, [
            'orderby'     => 'menu_order',
            'order'       => 'ASC',
            'postsToShow' => 10,
        ]);

        $query = new \WP_Query([
            'post_type' => 'client',
            'orderby'   => $attributes['orderBy'],
            'order'     => $attributes['order'],
            'showposts' => $attributes['postsToShow'],
        ]);

        if ($query->have_posts()) {
            require apply_filters('custom-post-type-clients-loop-template', plugin_dir_path(__FILE__).'/../../views/loop.php', $query, $attributes);
        }

        return ob_get_clean();
    }
}
