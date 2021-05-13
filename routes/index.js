const express = require('express');

const router = express.Router();
const Logs = require('../models/Logs');

router.get('/', async (req, res) => {
	try {
		const logs = await Logs.find();
		res.json(logs);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});
router.put('/:id', async (req, res) => {
	const { message, tech, attention } = req.body;

	// Build contact object
	const logFields = {};
	if (message) logFields.message = message;
	if (tech) logFields.tech = tech;
	if (attention) logFields.attention = attention;

	try {
		let log = await Logs.findById(req.params.id);
		if (!log) return res.status(404).json({ msg: 'Log not found' });
		// Make sure user owns contact
		//   if (contact.user.toString() !== req.user.id) {
		// 	return res.status(401).json({msg: 'Not authorized'});
		//   }
		clog = await Logs.findByIdAndUpdate(
			req.params.id,
			{ $set: logFields },
			{ new: true }
		);

		res.json({ msg: 'Log saved' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});
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

router.delete('/:id', async (req, res) => {
	try {
		await Logs.findByIdAndRemove(req.params.id);
		res.json({ msg: 'Contact removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});
module.exports = router;
