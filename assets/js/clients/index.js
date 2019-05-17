/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import edit from './edit';

registerBlockType('horttcore/clients', {
    title: __('Clients', 'custom-post-type-clients'),
    description: __('Shows a custom clients loop', 'custom-post-type-clients'),
    icon: 'businessman',
    category: 'widgets',
    keywords: [__('Client', 'custom-post-type-clients'), __('Query', 'custom-post-type-clients'), __('Loop', 'custom-post-type-clients')],
    attributes: {
        title: {
            type: 'string'
        },
        order: {
            type: 'string',
            default: 'asc'
        },
        orderBy: {
            type: 'string',
            default: 'menu_order'
        },
        postsToShow: {
            type: 'number',
            default: 10
        }
    },
    supports: {
        anchor: true
    },
    edit,
    save: (props) => {
        return null;
    }
});
