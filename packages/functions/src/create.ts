//import * as uuid from "uuid";
//import { Resource } from "sst";
//import { APIGatewayProxyEvent, Handler } from "aws-lambda";
//import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
//import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

//const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

import { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {

    console.log("made it here")

    return "789"

    //return "mno"
}
