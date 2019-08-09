import gql from "graphql-tag";

export const typeDefs = gql`
  type Tag__Tag implements Node__Identifiable & Node__Persisted {
    ID: ID!
    metadata: Node__Metadata!
    name: String!
    aliases: [String!]!
    connections: [Tag__Tag!]!
  }

  interface Tag__Tagged {
    tags: [Tag__Tag!]!
  }

  type Tag__Query {
    tags(include: Tag__Selection, exclude: Tag__Selection): [Tag__Tag!]!
  }

  type Tag__Mutation {
    create(
      name: String!
      aliases: [String!] = []
      connections: [String!] = []
    ): Tag__Tag

    update(
      ID: ID!
      name: String
      aliases: [String!]
      connections: [String!]
    ): Tag__Tag!

    delete(ID: ID!): Boolean!
  }

  input Tag__Filter {
    include: Tag__Selection
    exclude: Tag__Selection
  }

  input Tag__Selection {
    ids: [ID!]
    names: [String!]
  }
`;
