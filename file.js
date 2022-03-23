let myLibrary = [];

function Book(book, user) {
  this.book = book
  this.user = user

}

let userBook = document.getElementById('bname').innerText
let userName = document.getElementById('uname').innerText
const userInput = new Book(userBook, userName)

userBook.addEventListener('submit', (event) => {
  const para = document.createElement("p");
  const node = document.createTextNode(userBook)
  para.appendChild(node)
  let element = document.getElementById('div2');
  element.appendChild(para)
})

function addBookToLibrary(){
  for(var key in userInput) {
    myLibrary.push(userInput[key])
  }
  console.log(myLibrary)

}

console.log(addBookToLibrary())