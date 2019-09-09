import { gql } from "apollo-boost";

export const fetchTableQuery = gql`
  query {
    persons {
      id
    }
  }
`;

export const insertEntryTableQuery = gql`
  mutation {
  insert_books(objects:[{
          person_id: 1,
          title: "Digital Electronics",
          price: "689",
          genre_id: 2,
          publication_date: "2012-04-24"
  }]){
    returning {
      id
      genre_id
      title
    }
  }
}
`;

export const booksCountVsGenere = gql`
  {
    genres {
      id
      type
      books_aggregate {
        aggregate {
          count(columns: genre_id)
        }
      }
    }
  }
`;
export const booksCountVsPerson = gql`
  {
    persons(where: { age: { _gt: 20 } }) {
      name
      age
      books_aggregate {
        aggregate {
          count(columns: person_id)
        }
      }
    }
  }
`;
export const fetchGraphdataQueries = gql`
  {
    genres {
      id
      type
      books_aggregate {
        aggregate {
          count(columns: genre_id)
        }
      }
    }
    persons(where: { age: { _gt: 20 } }) {
      name
      age
      books_aggregate {
        aggregate {
          count(columns: person_id)
        }
      }
    }
  }
`;
