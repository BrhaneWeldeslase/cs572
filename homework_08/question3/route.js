const express = require('express');


const route = express.Router();

route.get('/', async (req, res) => {
    const place = req.body;
    if (!place || !place.category) return res.status(400).send('Category is a must criteria');

    const selected = await req.result.collection('location').find(place).toArray();
    const long = selected[0].location[0];
    const lat = selected[0].location[1];
    const query = {
        loc: {
            $near: { $geometry: { coordinates: [long, lat] } }
        }
    };

    const value = await req.result.collection('location').find(query).toArray();
    res.send(value);

});

route.post('/insert', (req, res) => {
    const collection = req.result.collection('location');
    const place = {
        'name': req.body.name,
        'category': req.body.category,
        'location': [req.body.location[0], req.body.location[1]]
    };
    collection.insert(req.body);
    res.send(place);

})


module.exports = route;
