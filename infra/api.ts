// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {});

api.route("GET /notes", "packages/functions/src/create.handler");
