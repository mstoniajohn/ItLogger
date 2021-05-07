const express = require('express');

const router = express.Router();
const Logs = require('../models/Logs');

router.get('/', (req, res) => {
	res.json({ message: 'hello' });
});
router.put('/:id', (req, res) => {});
router.post('/', async (req, res) => {
	const { message, attention, tech } = req.body;

	try {
		const newLog = new Logs({
			message,
			attention,
			tech,
		});
		let log = await newLog.save();
		res.json(log);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});

router.delete('/:id', (req, res) => {});
