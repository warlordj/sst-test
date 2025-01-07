
import { Handler } from "aws-lambda";
import OAuthClient from 'intuit-oauth';

const oauthClient = new OAuthClient({
    clientId: 'ABIHnYwYOVIQregKQpKdRZAyd94LCswuJj4Vaz6GGmwbaS1CH3',
    clientSecret: 'rTay7f1t87hn9Jcm91XocxDqzJPu6T73qiUV0jmC',
    environment: 'sandbox' || 'production',
    redirectUri: 'https://d1k7d2979d9v40.cloudfront.net/auth',
});

export const handler: Handler = async (event) => {

    return "012345678"

}
