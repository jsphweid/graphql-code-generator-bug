import gql from "graphql-tag";

import * as Node from "./Node";
import * as Query from "./Query";

export * from "./Context";

export const typeDefs = gql`
  ${Node.typeDefs}
  ${Query.typeDefs}
`;

// for graphql code generator
export const schema = typeDefs;
