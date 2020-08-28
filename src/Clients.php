<?php

namespace RalfHortt\CustomPostTypeClients;

use Horttcore\CustomPostType\PostType;

/**
 *  Custom Post Type Produts.
 */
class Clients extends PostType
{
    protected $slug = 'client';

    /**
     * Register hooks.
     *
     * @since 1.0.0
     **/
    public function register()
    {
        parent::register();
        add_action('enqueue_block_editor_assets', function () {
            wp_enqueue_script('custom-post-type-clients-blocks', plugin_dir_url(__FILE__).'../dist/js/blocks.js', [], filemtime(plugin_dir_path(__FILE__).'../dist/js/blocks.js'), true);
        });
    }

    /**
     * Register post type.
     *
     * @return array Post type configuration
     *
     * @since 1.0
     *
     * @author Ralf Hortt <me@horttcore.de>
     */
    public function getConfig(): array
    {
        return [
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => [
                'slug'       => _x('clients', 'Post Type Slug', 'custom-post-type-clients'),
                'with_front' => false,
            ],
            'capability_type' => 'post',
            'has_archive'     => false,
            'hierarchical'    => false,
            'menu_position'   => null,
            'menu_icon'       => 'dashicons-businessman',
            'supports'        => [
                'title',
                'editor',
                'thumbnail',
                'page-attributes',
            ],
            'show_in_rest' => true,
        ];
    }

    // END config

    /**
     * Labels.
     *
     * @return array
     **/
    public function getLabels(): array
    {
        return [
            'name'                  => _x('Clients', 'post type general name', 'custom-post-type-clients'),
            'singular_name'         => _x('Client', 'post type singular name', 'custom-post-type-clients'),
            'add_new'               => _x('Add New', 'Client', 'custom-post-type-clients'),
            'add_new_item'          => __('Add New Client', 'custom-post-type-clients'),
            'edit_item'             => __('Edit Client', 'custom-post-type-clients'),
            'new_item'              => __('New Client', 'custom-post-type-clients'),
            'view_item'             => __('View Client', 'custom-post-type-clients'),
            'view_items'            => __('View Clients', 'custom-post-type-clients'),
            'search_items'          => __('Search Clients', 'custom-post-type-clients'),
            'not_found'             => __('No Clients found', 'custom-post-type-clients'),
            'not_found_in_trash'    => __('No Clients found in Trash', 'custom-post-type-clients'),
            'parent_item_colon'     => __('Parent Client', 'custom-post-type-clients'),
            'all_items'             => __('All Clients', 'custom-post-type-clients'),
            'archives'              => __('Client Archives', 'custom-post-type-clients'),
            'attributes'            => __('Client Attributes', 'custom-post-type-clients'),
            'insert_into_item'      => __('Insert into client', 'custom-post-type-clients'),
            'uploaded_to_this_item' => __('Uploaded to this page', 'custom-post-type-clients'),
            'featured_image'        => __('Logo', 'custom-post-type-clients'),
            'set_featured_image'    => __('Set logo', 'custom-post-type-clients'),
            'remove_featured_image' => __('Remove logo', 'custom-post-type-clients'),
            'use_featured_image'    => __('Use as logo', 'custom-post-type-clients'),
            'menu_name'             => _x('Clients', 'post type general name', 'custom-post-type-clients'),
            'filter_items_list'     => __('Clients', 'custom-post-type-clients'),
            'items_list_navigation' => __('Clients', 'custom-post-type-clients'),
            'items_list'            => __('Clients', 'custom-post-type-clients'),
        ];
    }

    /**
     * Update messages.
     *
     * @param WP_Post      $post     Post object
     * @param string       $postType Post type slug
     * @param WP_Post_Type $postType Post type slug
     *
     * @return array Update messages
     **/
    public function getPostUpdateMessages(\WP_Post $post, string $postType, \WP_Post_Type $postTypeObjects): array
    {
        $messages = [
            0  => '', // Unused. Messages start at index 1.
            1  => __('Client updated.', 'custom-post-type-clients'),
            2  => __('Custom field updated.'),
            3  => __('Custom field deleted.'),
            4  => __('Client updated.', 'custom-post-type-clients'),
            5  => isset($_GET['revision']) ? sprintf(__('Client restored to revision from %s', 'custom-post-type-clients'), wp_post_revision_title((int) $_GET['revision'], false)) : false,
            6  => __('Client published.', 'custom-post-type-clients'),
            7  => __('Client saved.', 'custom-post-type-clients'),
            8  => __('Client submitted.', 'custom-post-type-clients'),
            9  => sprintf(__('Client scheduled for: <strong>%1$s</strong>.', 'custom-post-type-clients'), date_i18n(__('M j, Y @ G:i', 'custom-post-type-clients'), strtotime($post->post_date))),
            10 => __('Client draft updated.', 'custom-post-type-clients'),
        ];

        if (!$postTypeObjects->publicly_queryable) {
            return $messages;
        }

        $permalink = get_permalink($post->ID);
        $view_link = sprintf(' <a href="%s">%s</a>', esc_url($permalink), __('View client', 'custom-post-type-clients'));
        $messages[1] .= $view_link;
        $messages[6] .= $view_link;
        $messages[9] .= $view_link;

        $preview_permalink = add_query_arg('preview', 'true', $permalink);
        $preview_link = sprintf(' <a target="_blank" href="%s">%s</a>', esc_url($preview_permalink), __('Preview client', 'custom-post-type-clients'));
        $messages[8] .= $preview_link;
        $messages[10] .= $preview_link;

        return $messages;
    }
} // END class Clients
