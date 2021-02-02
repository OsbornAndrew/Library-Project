function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author)=> author.id === id)
  return foundAuthor
}
//This is my helper function
function compareBookToId(books, id){
  let foundBook = books.find((book) => book.id === id)
  return foundBook
}

function findBookById(books, id) {
return compareBookToId(books, id)
}

function partitionBooksByBorrowedStatus(books) {
return books.reduce((acc, book) => {
  const [borrowed, returned] = acc;
  const recent = book.borrows[0];
  if (recent.returned) {
    returned.push(book);
  }
  else {
    borrowed.push(book);
  }
  return acc;
},
[[], []]
)
}

function getBorrowersForBook(book, accounts) {
let borrowerInfo = [];
  for (let borrows of book.borrows) {
 let firstHalf = accounts.find((bookId)=> bookId.id === borrows.id)

  let borrowerFirstName = `${firstHalf.name.first}`;
  let borrowerLastName = `${firstHalf.name.last}`
  let BorrowerEmail = `${firstHalf.email}`

  borrowerInfo.push({ 
    "id" :book.id,
    "returned" : borrows.returned,
    "picture" : accounts.picture, 
    "age" : accounts.age,
    "name" :
      {"first" :`${borrowerFirstName}`, 
      "last" :`${borrowerLastName}`},
    "company" : accounts.company,
    "email" : `${BorrowerEmail}`,
    "registered" : accounts.registered
})
} 
console.log(borrowerInfo)
return borrowerInfo.splice(0,10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
