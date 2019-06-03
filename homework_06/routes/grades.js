const express = require('express');
const router = express.Router();

const grades = require('../data/grades');

function gradeIdMiddleware(request, response, next) {
	const id = request.params.id || -1;
	const available = grades.find((grade) => grade.id == id);
	if (!!available) next();
	else next({ status: 404, message: `Grade with id ${id} is not found` });
}

router.get('/', (request, response, next) => response.send(grades));

router.get('/:id', gradeIdMiddleware, (request, response, next) => {
	const id = request.params.id;
	const grade = grades[id - 1];
	response.send(grade);
});

router.post('/', (request, response, next) => {
	const grade = request.body;
	grade.id = grade.id || Math.ceil(Math.random() * 10 + grades.length);
	grades.push(grade);
	response.redirect('/api/grades');
});

router.delete('/:id', gradeIdMiddleware, (request, response, next) => {
	const id = request.params.id;
	grades.splice(id, 1);
	response.redirect('/api/grades');
});

module.exports = router;
