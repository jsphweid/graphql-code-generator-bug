import gql from "graphql-tag";

export const typeDefs = gql`
  type History implements Time__Timed {
    time: Time__Occurrence!
    narratives: [Narrative__Narrative!]!
  }

  type History__Query {
    all(time: Time__Selection!, tags: Tag__Filter): History!
  }
`;
