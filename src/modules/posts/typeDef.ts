import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type User {
    name: String!
    description: String!
    users: [User!]!
  }
`;
