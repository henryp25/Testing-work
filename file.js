let myLibrary = [];

function Book(book, user) {
  this.book = book
  this.user = user
}
let smit = document.getElementById("mybutton");

function addBookToLibrary(){
  let userBook = document.getElementById('bname').value
  let userName = document.getElementById('uname').value
  const userInput = new Book(userBook, userName)
  for(var key in userInput) {
    myLibrary.push(userInput[key])
  }
  console.log(myLibrary)
  console.log(`Hello ${userName} you fave book is ${userBook}`)
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.innerHTML = `Book:\n${userInput.book}`
  para2.innerHTML = `Name:\n${userInput.user}`
  let element = document.getElementById('div2');
  element.appendChild(para1)
  element.appendChild(para2)

}

smit.addEventListener('click', function() {
  addBookToLibrary()
})
