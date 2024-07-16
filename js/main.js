//get back the title of the book when the user enters the ISBN
document.querySelector('button').addEventListener('click', getFetch);

//on page load grabbing what's in books from localStorage and plulgs into dom
document.querySelector('h3').textContent = localStorage.getItem('books');

function getFetch() {
  const isbn = document.querySelector('input').value;
  console.log(isbn);
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);

      if (!localStorage.getItem('books')) {
        //if it's not null (falsy), will set to first book
        localStorage.setItem('books', data.title);
      } else {
        //put title into localStorage
        let books = localStorage.getItem('books') + ' ; ' + data.title;
        localStorage.setItem('books', books);
      }

      //document.querySelector('h3').textContent += data.title;
      //use localStorage instead
      document.querySelector('h3').textContent = localStorage.getItem('books');
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
