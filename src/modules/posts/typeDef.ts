import { gql } from 'apollo-server-core';

export const typeDef = gql`
  type Post {
    name: String!
    description: String!
    users: [User!]!
  }

  type Query {
    posts: [Post!]!
  }
`;
