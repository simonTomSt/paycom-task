import { gql } from 'apollo-server-core';

export const typeDef = gql`
  type Post {
    _id: ID
    name: String!
    description: String
    users: [User!]
  }

  extend type Query {
    posts: [Post!]!
    post(_id: ID, name: String, description: String): Post!
  }
`;
