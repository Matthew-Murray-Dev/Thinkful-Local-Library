function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}//returns first account object found where account id matches id

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}//standard sort, convert toLowerCase for standardization of comparison

function getTotalNumberOfBorrows(account, books) {
  let count=0;
for (let book in books) {
  let checkOutList=books[book].borrows
  count += checkOutList.reduce((total,checkOut) => {
   return total + (checkOut.id === account.id ? 1 : 0)
  }, 0)
  }
    return count;
}//for each book, reduce for elements where checkOut.id===account.id, increment count by output of .reduce()

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];

  books.forEach((book) => {
    let borrowed = book.borrows;
      if (borrowed.find((borrow) =>
        borrow.id === account.id &&
          borrow.returned===false)) {
      result.push(book);
    }
  });  //find book objects where borrow.id matches account.id && borrow.returned === false
  result.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    book.author = author;
  })//embed author to each book object
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
