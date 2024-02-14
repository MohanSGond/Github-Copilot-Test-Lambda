exports.handler = async (event, context) => {
    // TODO: Implement your application logic here.
    // You can access the event data using event object
    // and the AWS Lambda execution context using context object.

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!'
        })
    };
};