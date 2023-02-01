import { gql } from '@apollo/client'

export const GET_BOOKS = gql`
  query AllBooks($limit: Int!, $skip: Int!) {
    all_book(limit: $limit, skip: $skip) {
      total
      items {
        title
        system {
          uid
        }
        imgConnection {
          edges {
            node {
              url
              title
            }
          }
        }
      }
    }
  }
`

export const GET_BOOK = gql`
  query GetBook($uid: String!) {
    book(uid: $uid) {
      title
      multi_line
      imgConnection {
        edges {
          node {
            url
            title
          }
        }
      }
    }
  }
`

export const UPDATE_BOOK = gql`
  mutation UpdateBook($uid: String!) {
    updateBook(uid: $uid) {
      title
      multi_line
    }
  }
`

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $multi_line: String!) {
    createBook(title: $title, multi_line: $multi_line) {
      uid
      title
      multi_line
    }
  }
`

export const REMOVE_BOOK = gql`
  mutation RemoveBook($uid: String!) {
    removeBook(uid: $uid) {
      uid
    }
  }
`
