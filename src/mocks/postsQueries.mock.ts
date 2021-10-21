import { gql } from 'apollo-server-core';

export const postsQueries = {
  FIND_POST: gql`
    query {
      post(name: "Fancy post") {
        name
      }
    }
  `,

  FIND_POST_WITH_USERS: gql`
    query {
      post(name: "Fancy post") {
        name
        users {
          name
          posts {
            name
          }
        }
      }
    }
  `,

  FIND_POST_FAILED: gql`
    query {
      post(name: "Should fail") {
        name
        users {
          name
          posts {
            name
          }
        }
      }
    }
  `,

  FIND_POSTS: gql`
    query {
      posts {
        name
      }
    }
  `,

  FIND_POSTS_WITH_USERS: gql`
    query {
      posts {
        name
        users {
          name
          posts {
            name
          }
        }
      }
    }
  `,
};
