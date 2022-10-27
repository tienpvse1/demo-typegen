module.exports = {
  client: {
    includes: ["./src/**/*.graphql"],
    excludes: ["./node_modules/**/*.ts", "./src/graphql/*.ts"],
    service: {
      name: "sale-network-service",
      url: "https://dev-api.salesnetwork.info/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "F06lWP6Mtr5n",
      },
    },
  },
};
