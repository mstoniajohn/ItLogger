const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use('/api/logs', require('./routes/index'));
app.use('/api/techs', require('./routes/tech'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
