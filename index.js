const app = require("express")();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./models/schema");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () =>console.log(`Server Running On Server ${PORT} ...`))

const books = require("./data/Books")();
const authors = require("./data/Authors")();

const root = {
    books: () => books,
    authors: () =>({
        ...authors,
    }),
}

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

