var { mongoose } = require('../db/mongoose.js');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        minLength: 1,
        require: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };