const express = require('express');

const router = express.Router();
const Techs = require('../models/Techs');

router.get('/', async (req, res) => {
	try {
		const techs = await Techs.find();
		// console.log(techs);
		res.json(techs);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});
router.put('/:id', (req, res) => {});
router.post('/', async (req, res) => {
	const { firstName, lastName } = req.body;

	try {
		const newTech = new Techs({
			firstName,
			lastName,
		});
		let tech = await newTech.save();
		res.json(tech);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Techs.findByIdAndRemove(req.params.id);
		res.json({ msg: 'TEch removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error.');
	}
});
module.exports = router;
