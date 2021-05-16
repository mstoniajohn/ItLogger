const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use('/api/logs', require('./routes/index'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/techs', require('./routes/tech'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
