require('dotenv').config();
const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('Connected to Db');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
module.exports = connectDB;
