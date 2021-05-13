const mongoose = require('mongoose');

const LogsSchema = mongoose.Schema({
	message: {
		type: String,
		required: true,
	},
	attention: {
		type: Boolean,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	tech: {
		// type: mongoose.Schema.Types.ObjectId,
		// ref: 'tech',
		type: String,
		required: true,
	},
});
module.exports = mongoose.model('logging', LogsSchema);
