import gql from "graphql-tag";

// import { Resolvers } from "../../GeneratedTypes";
import * as Mutation from "./Mutation";
import * as Node from "./Node";
import * as Query from "./Query";
import * as Tag from "./Tag";
import * as Time from "./Time";

export * from "./Context";

export const typeDefs = gql`
  ${Mutation.typeDefs}
  ${Time.typeDefs}
  ${Node.typeDefs}
  ${Query.typeDefs}

  ${Tag.typeDefs}
`;

// for graphql code generator
export const schema = typeDefs;
