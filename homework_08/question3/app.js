const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = require('./route');

const app = express();

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
let db;

app.use(express.json());

app.set('port', process.env.PORT || 4000);
const port = app.get('port');

app.use((req, res, next) => {
    if (!db) {
        client.connect((err) => {
            if (err) throw err;
            const db = client.db('library');
            req.result = db;
            return next();
        });
    } else {
        req.result = db;
        return next();
    }
});

app.use('/locations', router);

app.listen(port, () => console.log(`Listening on ${port}`));