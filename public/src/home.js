function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  let checkedOutTotal = 0;
  let numberCheckedOut = books.reduce((book, {borrows}) => {
  for (const obj in borrows) {
    let checkedOut = borrows[obj].returned;
    if (checkedOut === false) {
   checkedOutTotal +=1;
    }
  return checkedOutTotal
  }
}, 0);
  return numberCheckedOut
}

function getMostCommonGenres(books) {
let genreCount = books.reduce((acc, {genre})=> {
  if (acc[genre]) {acc[genre] += 1;}
  else {acc[genre] = 1}
  return acc
}, {})
console.log(genreCount)
genreCount = Object.entries(genreCount)
return genreCount.map((popularGenres) =>{
  let genreTitle = popularGenres[0]
  let numOfBorrows = popularGenres[1]
  let genreObject = books.find(genreEntry=> genreTitle === genreEntry.genre)

  return {
    "name" : `${genreObject.genre}`,
    "count" : numOfBorrows} 
  } ).sort((a,b) => b.count-a.count).splice(0, 5)
 
  }    

function getMostPopularBooks(books) {
  let bookCount = books.reduce((acc, {title, borrows}) =>{
    if (acc[title]) {acc[title] += borrows.length;}
    else {
      acc[title] = borrows.length
    }
    return acc
  }, {})
  bookCount = Object.entries(bookCount)
  return bookCount.map((popularBooks)=>{
    let bookTitle = popularBooks[0]
    let totalBorrows = popularBooks[1]
    let bookObject = books.find(booksEntry=> bookTitle === booksEntry.title)
    return {
      "name" : `${bookObject.title}`,
      "count" : totalBorrows} } ).sort((a,b) => b.count-a.count).splice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let count = books.reduce((acc, {authorId, borrows}) =>{
    if (acc[authorId]) {
      acc[authorId] += borrows.length;
    }
    else {
      acc[authorId] = borrows.length;
    }
  return acc
  }, {})
  count = Object.entries(count)
    //[[authorID, borrows.length],]
    return count.map((authorCount)=> {
     let authorId = parseInt(authorCount[0])
     let totalBorrows = authorCount[1]
     let authorObject = authors.find(authorsEntry=> authorId === authorsEntry.id)
     return {
      "name" : `${authorObject.name.first} ${authorObject.name.last}`, 
      "count" : totalBorrows
    }    
    } ).sort((a,b) => b.count-a.count).splice(0, 5)

}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
