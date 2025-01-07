// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  defaults: {
    function: {
      runtime: "nodejs22.x",
    },
  },
});

api.addRoutes(this, {
  "GET /notes": {
    function: {
      handler: "packages/functions/src/create.handler",
      runtime: "nodejs22.x", // Ensure Node.js 22.x runtime for this specific function
    },
  },
});