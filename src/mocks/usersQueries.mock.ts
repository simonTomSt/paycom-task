import { gql } from 'apollo-server-core';

export const usersQueries = {
  FIND_USER: gql`
    query {
      user(name: "Janush") {
        name
        surname
      }
    }
  `,

  FIND_USER_WITH_POSTS: gql`
    query {
      user(name: "Janush") {
        name
        surname
        posts {
          name
          users {
            name
          }
        }
      }
    }
  `,

  FIND_USER_FAILED: gql`
    query {
      user(name: "Should fail") {
        name
      }
    }
  `,

  FIND_USERS: gql`
    query {
      users {
        name
        surname
      }
    }
  `,

  FIND_USERS_WITH_POSTS: gql`
    query {
      users {
        name
        surname
        posts {
          name
          users {
            name
          }
        }
      }
    }
  `,
};
