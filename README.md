# Custom Post Type Clients

A custom post type to manage clients

## Supports

* Title
* Post-Thumbnail
* Page Attributes

## Custom Fields

* URL

## Template functions

* `get_client_url(int $post_id)` Get client url
* `the_client_url(int $post_id = the_ID() )` Print client url

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

### Templating

* `custom-post-type-clients-loop-template` - Template file for the loop
* `custom-post-type-clients-single-template` - Template file for a single entry in the loop
* `custom-post-type-clients-image-size` - Default image size

## Changelog

### v1.0

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
