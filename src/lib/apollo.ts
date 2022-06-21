import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl4nkixoa089i01xm5tk73x9b/master",
  cache: new InMemoryCache(),
});
