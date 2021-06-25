<section class="clients <?php if ($attributes['className']) {
    echo esc_attr($attributes['className']);
} ?>">
    <?php if ($attributes['title']) {
    ?><h1 class="clients__title"><?php echo $attributes['title'] ?></h1><?php
} ?>
    <div class="clients__list">
        <?php
        while ($query->have_posts()) {
            $query->the_post();
            require apply_filters('custom-post-type-clients-single-template', plugin_dir_path(__FILE__).'single.php', $query, $attributes);
        }
        ?>
    </div>
</section>