const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	reminder: {
		type: Boolean,
		default: false,
	},
	day: {
		type: Date,
		// default: Date.now,
	},
});
module.exports = mongoose.model('task', TaskSchema);
