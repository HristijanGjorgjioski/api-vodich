let novPost = {};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Nauci Programiranje',
    body: 'Besplatno',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((odgovorOdServer) => odgovorOdServer.json())
  .then((post) => novPost = post)
  .then(() => console.log(novPost))
