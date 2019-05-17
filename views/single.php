<?php
$link = get_post_meta(get_the_ID(), '_url', true);

if ($link) :
    ?><a <?php post_class('clients__client client__link') ?> href="<?php echo esc_url_raw($link) ?>"><?php
else :
    ?><div <?php post_class('clients__client') ?>><?php
endif;

if (has_post_thumbnail()) :
    the_post_thumbnail(apply_filters('custom-post-type-clients-image-size', 'full'), ['class' => 'client__image', 'data-no-lazy' => '1']);
else :
    the_title();
endif;

if ($link) :
    ?></a><?php
else :
    ?></div><?php
endif;
