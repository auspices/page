import ApolloClient, {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from "apollo-boost";

import introspectionQueryResultData from "../generated/graphql";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });

export const initApolloClient = () =>
  new ApolloClient({
    cache,
    uri: "https://atlas.auspic.es/graph/c6f08e6f-892e-4aef-869e-788163a2cafc",
  });
