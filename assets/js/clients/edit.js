import LoopControl from './loop-control';
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { serverSideRender: ServerSideRender } = wp;

export default class Edit extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            setAttributes,
        } = this.props;

        return (
            <Fragment>
                <LoopControl
                    postType="client"
                    {...this.props.attributes}
                    setAttributes={setAttributes}
                    orderByValues={[{
                        value: "title/asc",
                        label: __("A → Z")
                    }]}
                    useGrid={false}
                />
                <ServerSideRender
                    block="custom-post-type-clients/loop"
                    attributes={{ ...this.props.attributes }}
                />
            </Fragment>
        );
    }
}

