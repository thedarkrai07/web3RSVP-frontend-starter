import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/devyeshtandon/wbw3-tutorial",
  cache: new InMemoryCache(),
});

export default client;