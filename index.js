//express var
const express = require('express');
const app = express();
const path = require('path');

//mongo var
const mongoose = require('mongoose');
const Product = require('./models/product');

//mongoose init
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    });

//cof path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route
app.get('/products',  async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', { products })
    })

//cof port
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})