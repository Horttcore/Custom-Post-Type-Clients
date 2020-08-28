<?php
function get_client_url(int $post_id): string
{
    return apply_filters('custom-post-type-clients/get-client-url', get_post_meta($post_id, '_url', true));
}

function the_client_url(string $before = '', string $after = '', int $post_id = null): void
{
    $post_id = (null != $post_id) ? $post_id : get_the_ID();
    echo apply_filters('custom-post-type-clients/client-url', $before . get_client_url($post_id) . $after);
}
