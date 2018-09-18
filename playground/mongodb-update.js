const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://controllo.local:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to the database', err);
    }
    console.log('Connected to the MongoDb Database');

    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectID('5b6c28d63b4ae1ab8cbc4533') },
    //     {
    //         $set: {
    //             connected: false
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((results) => {
    //     console.log(results);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5b9f5d3db0458f93d6335771') },
        {
            $set: {
                name: 'ShaileshSakhare'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((results) => {
        console.log(results);
    });

    // client.close();
});