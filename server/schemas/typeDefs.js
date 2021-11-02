const { gql } = require("apollo-server-express");

const typeDefs = gql `
type User {
    _id: ID!
    username: String!
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Highscore {
    score: [String]
  }
  input HighscoreInput {
      score: [String]
  }
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveHighscore(highscoreData: HighscoreInput!): User
  }
  `


module.exports = typeDefs;