import gql from "graphql-tag";

export const typeDefs = gql`
  scalar Time__Date
  scalar Time__Duration
  scalar Time__MS

  interface Time__Timed {
    time: Time__Occurrence!
  }

  interface Time__Occurrence {
    start: Time__FormattedDate!
  }

  type Time__Instant implements Time__Occurrence {
    start: Time__FormattedDate!
  }

  interface Time__Interval {
    duration: Time__FormattedDuration!
  }

  type Time__OngoingInterval implements Time__Occurrence & Time__Interval {
    start: Time__FormattedDate!
    duration: Time__FormattedDuration!
  }

  type Time__StoppedInterval implements Time__Occurrence & Time__Interval {
    start: Time__FormattedDate!
    duration: Time__FormattedDuration!
    stop: Time__FormattedDate!
  }

  input Time__Selection {
    start: Time__Date
    duration: Time__Duration
    stop: Time__Date
  }

  type Time__FormattedDate {
    unix: Time__FormattedDuration!
    iso: String!
    humanized: String!
    formatted(template: String = "h:mm A, dddd, MMMM Do, YYYY"): String!
  }

  type Time__FormattedDuration {
    humanized: String!
    milliseconds: Time__MS!
    seconds: Float!
    minutes: Float!
    hours: Float!
    days: Float!
    weeks: Float!
    months: Float!
    years: Float!
  }
`;
