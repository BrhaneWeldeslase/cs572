const express = require('express');

const route = express.Router();


route.get('/question1', async (req, res) => {
    const db = req.result;
    console.log('there will  be an error here');
    const collection = db.collection('locations');
    const query = {};
    try {
        const result = await collection.find(query).toArray();
        res.send(result);
    } catch (err) {
        console.error(new Error(err));
    }
});

route.get('/question2', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query2 = {};
    const project2 = { '_id': 0, 'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1 };

    collection.find(query2).project(project2).toArray(function (err, data) {
        res.send(data);
    });
});
route.get('/question3', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query3 = {};
    const project3 = { '_id': 0, 'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1 }

    collection.find(query3).project(project3).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question4', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query4 = {};
    const project4 = { '_id': 0, 'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1, 'address.zipcode': 1 }
    collection.find(query4).project(project4).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question5', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query = { 'district': { $eq: 'Bronx' } };
    collection.find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question6', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query = { 'district': { $eq: 'Bronx' } };
    collection.find(query).limit(5).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question7', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query = { 'district': { $eq: 'Bronx' } };
    collection.find(query).skip(5).limit(5).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

route.get('/question8', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query = { 'address.coord': { $elemMatch: { $lt: -95.754168 } } }
    collection.find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

route.get('/question9', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query = {
        $and: [
            { 'cuisine': { $ne: 'American ' } }, { 'grades.score': { $gt: 70 } },
            { 'address.coord': { $elemMatch: { $lt: -65.754168 } } }
        ]
    };
    collection.find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question10', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query10 = { 'name': { $regex: '^wil', $options: 'i' } };
    const project10 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'district': 1, 'cuisine': 1 };

    collection.find(query10).project(project10).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question11', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query11 = { 'name': { $regex: 'ces$', $options: 'i' } };
    const project11 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'district': 1, 'cuisine': 1 };

    collection.find(query11).project(project11).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question12', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query12 = { 'name': { $regex: 'Reg.*', $options: 'i' } };
    const project12 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'district': 1, 'cuisine': 1 };

    collection.find(query12).project(project12).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question13', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query13 = { 'district': { $eq: 'Bronx' }, 'cuisine': { $in: ['American ', 'Chinese'] } };

    collection.find(query13).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question14', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query14 = { 'district': { $in: ['Bronx', 'Staten Island', 'Queens', 'Brooklyn'] } };
    const project14 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'district': 1, 'cuisine': 1 };

    collection.find(query14).project(project14).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question15', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query15 = { 'district': { $nin: ['Bronx', 'Staten Island', 'Queens', 'Brooklyn'] } };
    const project15 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'district': 1, 'cuisine': 1 };

    collection.find(query15).project(project15).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question16', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query16 = { 'grades.score': { $lte: 10 } };
    const project16 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'district': 1, 'cuisine': 1, 'grades': 1 };

    collection.find(query16).project(project16).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

route.get('/question17', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query17 = { 'address.coord.1': { $gt: 42, $lte: 52 } };
    const project17 = { '_id': 0, 'name': 1, 'restaurant_id': 1, 'address': 1 };

    collection.find(query17).project(project17).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

route.get('/question18', (req, res) => {
    const db = req.result;
    const query18 = {};
    const collection = db.collection('locations');
    collection.find(query18).sort(['name', 1]).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question19', (req, res) => {
    const db = req.result;
    const query = {};
    const collection = db.collection('locations');
    collection.find(query).sort({ 'name': -1 }).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question20', (req, res) => {
    const db = req.result;
    const query = {};
    const collection = db.collection('locations');
    collection.find(query).sort({ 'cuisine': 1, 'district': -1 }).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });

});

route.get('/question21', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');

    const query = { 'address.coord': { $type: 1 } };
    collection.find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
route.get('/question22', (req, res) => {
    const db = req.result;
    const collection = db.collection('locations');
    const query = { 'name': { $regex: '^Mad', $options: 'i' } };
    const project = { '_id': 0, 'name': 1, 'district': 1, 'address.coord': 1 };

    collection.find(query).project(project).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });

});

module.exports = route;