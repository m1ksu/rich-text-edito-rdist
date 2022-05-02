export const sanitizeOpts = {
    allowedTags: ['img', 'br'],
    allowedAttributes: {
        img: ['src', 'alt'],
    },
    allowedSchemes: ['data'],
    exclusiveFilter: (frame) => frame.attribs['data-js'] === 'mathEditor',
};
//# sourceMappingURL=sanitizeOpts.js.map