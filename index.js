const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect(
	'mongodb+srv://musashi:musashi1@cluster0-b2wid.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true },
	() => console.log('Connected to DB')
);

//Import Routes
const authRoute = require('./routes/auth');

//Route Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running'));
