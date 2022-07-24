import { gql } from "@apollo/client";

const GET_POSTS = gql`
 query{
    posts {
    author {
      name
      avatar {
        url
      }
    }
    title
    slug
    id
    coverPhoto {
      url
    }
  }
 }
`

const GET_AUTHORS = gql`
query{
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`

const GET_AUTHOR = gql`
query getAuthor($slug:String!){
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    description {
      html
    }
    feild
    id
    name
    posts {
      slug
      title
      id
      coverPhoto {
        url
      }
    }
  }
}
`

const GET_POST = gql`
query getPost($slug:String!){
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      feild
      id
      name
    }
    contentText {
      html
    }
    coverPhoto {
      url
    }
    title
  }
}
`

const GET_COMMENT = gql`
query getcomment($slug:String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    email
    text
  }
}


`


export {GET_POSTS,GET_AUTHORS,GET_AUTHOR,GET_POST,GET_COMMENT}