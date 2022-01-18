const express = require('express');
const app = express();
app.use(express.static('public'));

let port = 3000;
app.listen(port, () => console.log(`My first app listening on port ${port}! https://localhost:${port}/`));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/views/home-page.html'));

app.get('/movies', (request, response, next) => response.sendFile(__dirname + '/views/views/movies.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/views/about.html'));

