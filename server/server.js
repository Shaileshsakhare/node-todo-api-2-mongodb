var express = require('express');
var bodyParser = require('body-parser');
let { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');

mongoose.set('debug', true);

var app = express();

const port = process.env.port || 3000;

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos, status: 200 });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    //   console.log('--------------------');
    const id = req.params.id;
    // console.log(id);
    if (!ObjectID.isValid(id)) {
        //   console.log('2');
        return res.status(404).send();
    }
    Todo.findById(id)
        .then((todos) => {
            if (!todos) {
                // console.log('1');
                return res.status(404).send();
            }
            // console.log('3');
            res.send({ todos });
        }).catch(() => {
            return res.status(400).send();
        });
})

app.listen(port, () => {
    console.log(`Started at ${port}`);
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

