const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

// get a list of tasks
router.get('/', async (req, res) => {
	try {
		let tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});
// add task
router.post('/', async (req, res) => {
	const { text, day, reminder } = req.body;
	try {
		let newTasks = new Task({ text, day, reminder });
		let task = await newTasks.save();
		res.json(task);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.put('/:id', async (req, res) => {
	const { text, day, reminder } = req.body;

	// Build contact object
	const taskFields = {};
	if (text) taskFields.text = text;
	if (day) taskFields.day = day;
	if (reminder) taskFields.reminder = reminder;

	try {
		let task = await Task.findById(req.params.id);
		if (!task) return res.status(404).json({ msg: 'Task not found' });

		task = await Task.findByIdAndUpdate(
			req.params.id,
			{ $set: taskFields },
			{ new: true }
		);

		res.json({ msg: 'Task saved' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Task.findByIdAndRemove(req.params.id);
		res.json({ msg: 'Task removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});

module.exports = router;
