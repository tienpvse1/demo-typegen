import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "https://dev-api.salesnetwork.info/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": "F06lWP6Mtr5n",
      },
    },
  },
  documents: "./src/**/*.graphql",

  generates: {
    "./src/gql/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
export default config;
