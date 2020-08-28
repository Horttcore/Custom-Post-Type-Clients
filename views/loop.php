<section class="clients <?php if (isset($attributes['className'])) {
    echo esc_attr($attributes['className']);
} ?>">
    <div class="clients__<?= $attributes['postLayout'] ?>">
        <?php
        while ($query->have_posts()) :
            $query->the_post();
            require apply_filters('custom-post-type-clients-single-template', plugin_dir_path(__FILE__).'single.php', $query, $attributes);
        endwhile;
        ?>
    </div>
</section>