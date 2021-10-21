import { gql } from 'apollo-server-core';

export const typeDef = gql`
  type User {
    _id: ID!
    name: String!
    surname: String!
    posts: [Post!]
  }

  extend type Query {
    users: [User!]!
    user(_id: ID, name: String, surname: String): User
  }
`;
