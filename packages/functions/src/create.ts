
import { Handler } from "aws-lambda";
import OAuthClient from 'intuit-oauth';

const oauthClient = new OAuthClient({
    clientId: 'ABIHnYwYOVIQregKQpKdRZAyd94LCswuJj4Vaz6GGmwbaS1CH3',
    clientSecret: 'rTay7f1t87hn9Jcm91XocxDqzJPu6T73qiUV0jmC',
    environment: 'sandbox' || 'production',
    redirectUri: 'https://d1k7d2979d9v40.cloudfront.net/auth',
});

const authUri = oauthClient.authorizeUri({
    scope: [OAuthClient.scopes.Accounting],
    state: 'testState', // Optional state parameter for CSRF protection
});

export const handler: Handler = async (event) => {

    console.log("1")

    return {
        statusCode: 200, // HTTP 200 OK
        headers: {
            'Content-Type': 'application/json', // Specify JSON response
        },
        body: JSON.stringify(authUri), // Return "test" as a JSON string
    };

}
