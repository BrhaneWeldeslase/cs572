const express = require('express');
// const request = require("request");
// const bodyParser = require('body-parser');
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');

const app = express();
app.use(express.json());
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cors());

const urlencodedParser = express.urlencoded({ extended: true });
app.use(urlencodedParser);

// remote
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:test@cluster0-rz5ea.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

// local
//const MongoClient = require('mongodb').MongoClient;
//const client=new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });    
const db;
const collection;
client.connect(function (err) {
    db = client.db('homework07');
    collection = db.collection('lectures');
});

//Get
app.get('/lectures', function (req, res) {
    const da = collection.find({}).toArray(function (err, docs) {
        res.json(docs);
        res.end();
    });
});

app.get('/lectures/:course', function (req, res) {
    const cou = req.params.course;
    collection.find({ course: cou }).toArray(function (err, doc) {
        res.json(doc);
        res.end();
    });
});

//Post
app.post('/lectures', function (req, res) {
    collection.save(req.body);
    res.json(req.body);
    res.end();
});

// Put
app.put('/lectures/:course', function (req, res) {

    const myquery = { course: req.params.course };
    const newvalues = { $set: req.body };

    collection.updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("UpdateOne:");
        console.log(req.body);

    });
});

// Delete
app.delete('/lectures/:course', function (req, res) {
    const myquery = { course: req.params.course };
    collection.deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("deleteOne:");
        console.log(req.body);
    });
});

app.get('/search/:q', function (req, res) {
    const patt = req.params.q;
    collection.find({ course: { $regex: patt } }).toArray(function (err, doc) {
        res.json(doc);
        res.end();
    });
});

app.listen(3000, () => console.log("Listening to 3000"));