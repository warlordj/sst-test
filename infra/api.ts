// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {});

api.route("GET /notes", {
  function: {
    handler: "packages/functions/src/create.handler",
  }
  
});
