function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {

    let total = 0; 
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
     borrow.id === account.id ? total += 1 : total
    })
    })
      return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];

  books.forEach((book) => {
    let borrowed = book.borrows;
      if (borrowed.find((borrow) =>
        borrow.id === account.id &&
          borrow.returned===false)) {
      result.push(book);
    }
  });
  result.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    book.author = author;
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
