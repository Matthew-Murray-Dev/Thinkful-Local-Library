function findAuthorById(authors, id) {
  //array.filter() returns account object within an array, used Object.assign as well as the spread operator to properly format output
  return Object.assign({}, ...authors.filter((author) => author.id === id));
}



function findBookById(books, id) {
  //array.filter() returns account object within an array, used Object.assign as well as the spread operator to properly format output
  return Object.assign({}, ...books.filter((book) => book.id === id));
}




//for each book in books, push book object to checkedOut if returned status === false, push book object to returned if returned value === true, return in [[],[]] format
function partitionBooksByBorrowedStatus(books) {
  const checkedOut = [];
  const returned = [];
  books.forEach((book) => borrowedStatusCheck(book) ? checkedOut.push(book) : returned.push(book));

  return [checkedOut, returned]
} 




function getBorrowersForBook(book, accounts) {
  //filters for all accounts where account.id matches any of the book.borrows[i].id subObjects.
  let output = accounts.filter((account) => book.borrows.map((borrowed) => borrowed.id).includes(account.id))
  //Add 'returned' object to book object
  output.forEach((account) => account['returned'] = book.borrows.find((accountId) => accountId.id === account.id).returned);
  //limit list to 10 accounts
  return output.slice(0, 10);
}



//helper function for checking borrowed status of books
function borrowedStatusCheck(book) {
  return book.borrows.some((status) => status.returned === false)
}






module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
