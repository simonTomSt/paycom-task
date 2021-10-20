import { gql } from 'apollo-server-core';

export const typeDef = gql`
  type User {
    name: String!
    surname: String!
    posts: [Post!]!
  }

  type Query {
    users: [User!]!
    user(name: String!): User!
  }
`;
