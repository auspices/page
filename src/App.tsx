import React from "react";
import { ApolloProvider } from "react-apollo";

import { initApolloClient } from "./lib/initApolloClient";
import { Page } from "./components/Page";

const client = initApolloClient();

export const App = () => (
  <ApolloProvider client={client}>
    <Page />
  </ApolloProvider>
);
