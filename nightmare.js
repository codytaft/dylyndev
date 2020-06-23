const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const fs = require('fs');

let movies = []
nightmare
  .goto('https://films.criterionchannel.com/')
  .evaluate(() => {
    const movies = Array.from(
      document.querySelectorAll('.criterion-channel__tr')
    )
    const urls = movies.map(movie => {
      const title = movie.querySelector('a').innerText
      const director = movie.querySelector('.criterion-channel__td--director').innerText
      const url = movie.querySelector('a').href
      return { title, director, url }
    })
    return urls
  })
  .end()
  .then(result => {
    console.log('Nightmare script ran successfully', result);
    fs.appendFile('./src/data/criterionMovies.json', JSON.stringify(result), () => {
      console.log('Saved!');
    });
  })
  .catch(error => {
    console.error('Search failed:', error)
  })