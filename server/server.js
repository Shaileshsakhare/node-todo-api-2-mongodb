var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body.text);
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then((doc) => {
        console.log('saved to do', JSON.stringify(doc, undefined, 2));
        res.send(doc);
    }, (e) => {
        console.log('Unable to save doc', e);
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('server is listening on 3000');
})


module.exports = { app };

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// var newTodo = new Todo({
//     text: 'Have Dinner',
//     completed: true,
//     completedAt: '31232'
// });



// var newUser = new User({
//     email: ' shailesh.sakhare@brillio.com '
// });

