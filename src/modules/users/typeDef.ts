import { gql } from 'apollo-server-core';

export const typeDef = gql`
  type User {
    name: String!
    surname: String!
  }

  type Query {
    getAllUsers: [User!]!
  }
`;
