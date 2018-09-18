var { mongoose } = require('../db/mongoose.js');

const User = mongoose.model('Users', {
    email: {
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

module.exports = { User };