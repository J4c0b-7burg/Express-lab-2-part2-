const express = require('express')

const app = express();
const PORT = 3000

// const baseUrl = `http://localhost:${PORT}/`


app.get(`/:beerBottles`, (request, response) => {
    let beerBottles = request.params.beerBottles
    for (beerBottles > 0; beerBottles -=1;){
    response.send(`${beerBottles} bottles of beer on the wall, <a href="http://localhost:3000/${beerBottles}">Take two down pass 'em around</a>`)
    }
    response.send(`No more bottles of beer you drunk, <a href="http://localhost:3000/101">Start over`)
})


app.listen(PORT, () => {
    console.log(`Currently listening to ${PORT}`);
});