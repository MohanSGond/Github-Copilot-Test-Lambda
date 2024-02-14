const handler = require('./lambda/handler');

exports.handler = async (event, context) => {
    return await handler(event, context);
};