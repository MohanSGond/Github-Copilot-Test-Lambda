# My Lambda App

This is a simple AWS Lambda application written in Node.js. It's set up with continuous integration via GitHub Actions.

## Project Structure

- `src/index.js`: The entry point of the application.
- `src/lambda/handler.js`: The AWS Lambda function handler.
- `tests/handler.test.js`: Tests for the handler function.
- `.github/workflows/main.yml`: The GitHub Actions workflow for CI/CD.
- `serverless.yml`: The Serverless Framework configuration file.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your AWS credentials.
4. Deploy the application with `serverless deploy`.

## Testing

Run `npm test` to execute the test suite.

## Deployment

The application is automatically deployed to AWS Lambda via GitHub Actions whenever changes are pushed to the main branch.