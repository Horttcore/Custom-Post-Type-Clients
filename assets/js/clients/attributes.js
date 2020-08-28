export default {
    postLayout: {
        type: 'string',
        default: 'list',
    },
    gridColumns: {
        type: 'integer',
        default: -1,
    },
    orderBy: {
        type: 'string',
        default: 'title'
    },
    order: {
        type: 'string',
        default: 'asc'
    },
    numberOfItems: {
        type: 'number',
        default: 10,
    },
    offset: {
        type: 'number',
        default: 0
    },
    postIn: {
        type: 'array',
        default: [],
    }
}