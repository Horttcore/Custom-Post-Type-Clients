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

namespace RalfHortt\CustomPostTypeClients;

use RalfHortt\CustomPostTypeClients\Blocks\ClientsBlock;
use RalfHortt\CustomPostTypeClients\MetaBoxes\ClientMeta;
use RalfHortt\Plugin\PluginFactory;
use RalfHortt\TranslatorService\Translator;

// ------------------------------------------------------------------------------
// Prevent direct file access
// ------------------------------------------------------------------------------
if (!defined('WPINC')) {
    exit;
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
    ->addService(Translator::class, 'custom-post-type-client', dirname(plugin_basename(__FILE__)).'/languages/')
    ->addService(Clients::class)
    ->addService(ClientMeta::class)
    ->addService(ClientsBlock::class)
    ->boot();
