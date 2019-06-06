const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient('mongodb://localhost:27017',{ useNewUrlParser: true });
const userRoute = require('./route');
 app.use(doConnect);
app.use('/users', userRoute);
app.use(express.json());

function doConnect(req, res, next) {
    client.connect((err) => {
        if (err) {
            throw err
        } else {
            console.log('Successfully connected to MongoDB')
            const db = client.db("restaurants");
            console.log('connected with the restaurant db');
            client.close;
            req.result = db;
            return next();
        }
    })
}
app.listen(3000, () => console.log('Listening on port 3000'));
