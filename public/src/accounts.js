function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account) => account.id === id)
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  let lastNameSorted = accounts.sort((name1, name2) => name1.name.last > name2.name.last? 1 : -1)
  return lastNameSorted;
}

function numberOfBorrows(accounts, books) {
  let timesBorrowed = 0;
  let accumulator = books.reduce((timesBorrowed, {borrows}) => {
    for (const obj in borrows) {
      let bookID = borrows[obj].id;
      const userID = accounts.id;
    if (bookID === userID) {
   timesBorrowed += 1; 
    }
  } return timesBorrowed
}, 0);
  return accumulator
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    const stepOne = book.borrows[0];
    return !stepOne.returned && stepOne.id === account.id;
  })
.map((book) => {
  const author = authors.find((author) => author.id === book.authorId);
  return { ...book, author}
}); 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
