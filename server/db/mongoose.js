const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://controllo.local:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };