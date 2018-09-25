const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//|| 'mongodb://controllo.local:27017/TodoApp
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose };