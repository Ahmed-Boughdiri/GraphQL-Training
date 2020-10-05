const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Book {
        name: String
        id: Int
    }
    type Authors {
        id: Int
        name: String
        books: [Book]
    }
    type Books {
        name: String
        language: String
        author: String
        id: Int
    }
    type Query {
        books: [Books]
        authors: [Authors]    
    }
`)
