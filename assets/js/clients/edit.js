/**
 * External dependencies
 */
const { __ } = wp.i18n;

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { PanelBody, Placeholder, QueryControls, Spinner } = wp.components;
const { InspectorControls, RichText } = wp.editor;
const { withSelect } = wp.data;
const { createHooks } = wp.hooks;

class Clients extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const { attributes, setAttributes, latestPosts } = this.props;
        const { order, orderBy, postsToShow, title } = attributes;
        const hasPosts = Array.isArray(latestPosts) && latestPosts.length;
        const displayPosts = latestPosts;
        const hooks = createHooks();

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Clients')}>
                        <QueryControls {...{ order, orderBy }} numberOfItems={postsToShow} onOrderChange={(value) => setAttributes({ order: value })} onOrderByChange={(value) => setAttributes({ orderBy: value })} onNumberOfItemsChange={(value) => setAttributes({ postsToShow: value })} />
                    </PanelBody>
                </InspectorControls>
                <section className="clients">
                    <RichText className="clients__title" tagName="h1" value={title} Placeholder={__('Clients', 'custom-post-type-staff')} keepPlaceholderOnFocus onChange={(title) => setAttributes({ title })} />
                    <div className="clients__list">
                        {hasPosts ? (
                            displayPosts.map((post, i) => hooks.applyFilters('clients-block-editor', <article className="post-{post.id} client type-client status-{post.status} hentry">{post._embedded ? <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} /> : post.title.rendered}</article>, post, i))
                        ) : (
                            <Placeholder icon="admin-post" label={__('Clients')}>
                                {!Array.isArray(latestPosts) ? <Spinner /> : __('No clients found.')}
                            </Placeholder>
                        )}
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default withSelect((select, props) => {
    const { postsToShow, order, orderBy } = props.attributes;
    const { getEntityRecords } = select('core');
    const latestPostsQuery = {
        orderby: orderBy,
        order: order,
        per_page: postsToShow,
        _embed: true
    };
    return {
        latestPosts: getEntityRecords('postType', 'client', latestPostsQuery)
    };
})(Clients);
