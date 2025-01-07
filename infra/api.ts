// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {});

api.route("GET /notes", {
  handler: "packages/functions/src/create.handler",
  runtime: "nodejs20.x"
});
