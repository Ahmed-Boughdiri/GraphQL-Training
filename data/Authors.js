
const books = require("./Books")();

module.exports = function () {
    var i = 0;
    function getBooks() {
        const booksResult = [books.find(book => book.author === info[i].name)]
        i++;
        const result = []
        booksResult.map(book =>{
            const bookData = {
                name: book.name,
                id: book.id
            }
            result.push(bookData)
        })
        return result
    }
    const info = [
        {
            id: 0,
            name: "Isabelle Filliozat",
        },
        {
            id: 1,
            name: "Smauel P Huntington",
        },
        {
            id: 2,
            name: "Karen Blixen",
        },
        {
            id: 3,
            name: "Dale Carnegie",
        },
        {
            id: 4,
            name: "Stephen R Covey",
        },
        {
            id: 5,
            name: "Daniel Goleman",
        },
        {
            id: 6,
            name: "Greeta Dharmarajan",
        },
        {
            id: 7,
            name: "Sherry Argov",
        },
        {
            id: 8,
            name: "Karl Marx",
        },
        {
            id: 9,
            name: "Tony Robbins",
        },
        {
            id: 10,
            name: "Napeleon Hill",
        },
        {
            id: 11,
            name: "Robert Kiosaki",
        },
        {
            id: 12,
            name: "Michael Lewrik",
        },
        {
            id: 13,
            name: "Mark Manson",
        },
    ]
    info.map(i =>{
        i.books = getBooks() 
    })
    return info
}
