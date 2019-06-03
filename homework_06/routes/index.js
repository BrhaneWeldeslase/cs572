const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
	response.send("You've got nothing to loose!");
});

module.exports = router;
