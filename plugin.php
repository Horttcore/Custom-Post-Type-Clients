<?php
/**
 * Plugin Name: Custom Post Type Clients
 * Plugin URI: https://horttcore.de
 * Description: A custom post type for managing clients
 * Version: 1.0.0
 * Author: Ralf Hortt
 * Author URI: https://horttcore.de
 * Text Domain: custom-post-type-clients
 * Domain Path: /languages/
 * License: MIT.
 */

namespace Horttcore\CustomPostTypeClients;

use Horttcore\CustomPostTypeClients\Blocks\ClientsBlock;
use Horttcore\CustomPostTypeClients\MetaBoxes\ClientMeta;
use Horttcore\Plugin\PluginFactory;

// ------------------------------------------------------------------------------
// Prevent direct file access
// ------------------------------------------------------------------------------
if (!defined('WPINC')) {
    die;
}

// ------------------------------------------------------------------------------
// Autoloader
// ------------------------------------------------------------------------------
$autoloader = dirname(__FILE__).'/vendor/autoload.php';

if (is_readable($autoloader)) {
    require_once $autoloader;
}

// ------------------------------------------------------------------------------
// Bootstrap
// ------------------------------------------------------------------------------
PluginFactory::create()
    ->addTranslation('custom-post-type-clients', dirname(plugin_basename(__FILE__)).'/languages/')
    ->addService(Clients::class)
    ->addService(ClientMeta::class)
    ->addService(ClientsBlock::class)
    ->boot();
