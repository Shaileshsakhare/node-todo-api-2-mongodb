const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
var id = '5b9ffa7758d641d3f4fd1576';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findById(id)
//     .then((todos) => {
//         if (!todos) {
//             return console.log('Todo by Id', todos);
//         }
//         console.log('Todos', todos);
//     }).catch((e) => console.log(e));

User.findById(id)
    .then((users) => {
        if (!users) {
            return console.log('User by Id', users);
        }
        console.log(users);
    }).catch((e) => console.log(e));