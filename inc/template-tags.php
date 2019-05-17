<?php
/**
 * Get client URL.
 *
 * @param int $post_id Post ID
 *
 * @return string URL
 **/
function get_client_url(int $post_id)
{
    return get_post_meta($post_id, '_url', true);
}

/**
 * Get client meta.
 *
 * @param int $post_id Post ID
 *
 * @return void
 **/
function the_client_url(int $post_id = null)
{
    $post_id = (null != $post_id) ? $post_id : get_the_ID();
    echo get_client_url($post_id);
}
