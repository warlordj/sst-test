// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  defaults: {
    function: {
      runtime: "nodejs22.x",
    },
  },
});

api.route("GET /notes", "packages/functions/src/create.handler");
