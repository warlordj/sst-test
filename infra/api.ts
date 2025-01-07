import { table } from "./storage";
// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      },
    },
  },
});
api.route("GET /notes", "packages/functions/src/create.handler");
