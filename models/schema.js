const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Authors {
        id: Int
        name: String
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
