# Custom Post Type Clients

A custom post type to manage clients

## Supports

* Title
* Thumbnail
* Page Attributes

## Custom Fields

* URL

## Language Support

* english
* german

Translation ready

## Hooks

### Actions

* `custom-post-type-clients-information-meta-box-before` - Post object is past as arguement
* `custom-post-type-clients-information-meta-box-after` - Post object is past as arguement

### Filters

* `save-client-meta` - Save client meta

## ToDo

* Widget
* Shortcode
* Meta box as submodule

## Changelog

### v0.5

* Added: Admin logo column
* Added: Admin url column
* Added: Tempalte functions `get_client_url()` and `the_client_url()`
* Changed: Set default order to menu_order, title

### v0.4

* Changed: Refactoring
* Changed: Updated register post type labels
* Changed: Updated register taxonomy labels
* Changed: Update translations
* Changed: Renamed hooks

### v0.3

* Enhancement: Cleanup
* Added hook: `save-client-meta`

### v0.2

* Bugfix: Fixed function comments
* Added: Hooks
* Added: Menu icon
* Enhancement: Security fixes

### v0.1

* Initial release
