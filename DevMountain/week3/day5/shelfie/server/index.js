const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');

require('dotenv').config();

const app = express();

const {CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log(`We connected bois`)
});

app.get('/api/products', ctrl.getProducts);

app.get('/api/product/:id', ctrl.getProduct)

app.post('/api/product', ctrl.createProduct);

app.put('/api/product/:id', ctrl.updateProduct);

app.delete('/api/product/:id', ctrl.deleteProduct);

app.listen(5000, () => console.log(`We're up & running on the 5k!`));

