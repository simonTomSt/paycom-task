import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type User {
    name: String!
    surname: String!
    posts: [Posts!]!
  }

  type Query {
    users: [User!]!
    user(name: String!): User!
  }
`;
