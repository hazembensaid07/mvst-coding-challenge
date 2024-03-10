import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: import.meta.env.VITE_GITHUB_API_URL, // Endpoint URL fetched from environment variables.
  cache: new InMemoryCache(), // Utilizes in-memory caching of query results.
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // Sets up the Authorization header for API access.
  },
});

export default client;
