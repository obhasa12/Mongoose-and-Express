const express = require('express');
const app = express();
const path = require('path');

//cof path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route
app.get('/dog',  (req, res) => {
    res.send("WOOF!")
})


//cof port
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})