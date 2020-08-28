<?php

namespace RalfHortt\CustomPostTypeClients\Blocks;

use RalfHortt\WPBlock\Block;

class ClientsBlock extends Block
{
    protected $name = 'custom-post-type-clients/loop';

    protected $attributes = [
        'postLayout' => [
            'type'    => 'string',
            'default' => 'list',
        ],
        'gridColumns' => [
            'type'   => 'integer',
            'default'=> -1,
        ],
        'orderBy' => [
            'type'    => 'string',
            'default' => 'title',
        ],
        'order' => [
            'type'    => 'string',
            'default' => 'asc',
        ],
        'numberOfItems' => [
            'type'    => 'integer',
            'default' => 10,
        ],
        'offset' => [
            'type'    => 'integer',
            'default' => 0,
        ],
        'postIn' => [
            'type'    => 'array',
            'default' => [],
        ],
    ];

    protected function render(array $atts, string $content): void
    {
        $attributes = wp_parse_args($atts, $this->getAttributes());

        $args = [
            'post_type' => 'client',
            'orderby'   => $attributes['orderBy'],
            'order'     => $attributes['order'],
            'showposts' => $attributes['numberOfItems'],
            'offset'    => $attributes['offset'],
        ];
        if (!empty($attributes['postIn'])) {
            $args['post__in'] = $attributes['postIn'];
            $args['orderby'] = 'post__in';
            $args['order'] = 'asc';
            $args['showposts'] = -1;
        }

        $query = new \WP_Query($args);

        if ($query->have_posts()) {
            require apply_filters('custom-post-type-clients-loop-template', plugin_dir_path(__FILE__).'/../../views/loop.php', $query, $attributes, $atts);
        }
    }
}
