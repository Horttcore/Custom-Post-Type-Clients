import attributes from './attributes';
import edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('custom-post-type-clients/loop', {
    title: __('Clients', 'custom-post-type-clients'),
    description: __('Shows a custom clients loop', 'custom-post-type-clients'),
    icon: 'businessman',
    category: 'widgets',
    keywords: [__('Client', 'custom-post-type-clients'), __('Query', 'custom-post-type-clients'), __('Loop', 'custom-post-type-clients')],
    attributes,
    supports: {
        anchor: true
    },
    edit,
    save: (props) => {
        return null;
    }
});
