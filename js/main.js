//get back the title of the book when the user enters the ISBN
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const isbn = document.querySelector('input').value;
  console.log(isbn);
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);
      //put title into localStorage
      localStorage.setItem('books', data.title);
      document.querySelector('h3').textContent += data.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
