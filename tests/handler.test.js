const handler = require('../src/lambda/handler');

describe('Test for AWS Lambda handler', () => {
    test('It should return correct response', async () => {
        const event = {}; // your test event data
        const context = {}; // your test context data

        const expectedResponse = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello from Lambda!'
            })
        };

        const response = await handler(event, context);
        expect(response).toEqual(expectedResponse);
    });
});