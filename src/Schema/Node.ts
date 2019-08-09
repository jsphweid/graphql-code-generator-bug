import gql from "graphql-tag";

export const typeDefs = gql`
  interface Node__Identifiable {
    ID: ID!
  }

  interface Node__Persisted {
    metadata: Node__Metadata!
  }

  type Node__Metadata {
    created: Time__FormattedDate!
    updated: Time__FormattedDate!
  }
`;

export const resolvers = {
  Node__Identifiable: {
    __resolveType: () => "Node__Identifiable"
  },

  Node__Persisted: {
    __resolveType: () => "Node__Persisted"
  }
};
