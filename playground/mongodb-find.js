const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://controllo.local:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to the database', err);
    }
    console.log('Connected to the MongoDb Database');

    const db = client.db('TodoApp');
    // db.collection('Todos').find().toArray((err, docs) => {
    //     if (err) {
    //         console.log('Unable to fetch todos', err);
    //     } else {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }
    // });

    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(count);
    //     }, (err) => {
    //         console.log(err);
    //     });

    db.collection('Users').find({ name: 'Sakhare' }).toArray((err, docs) => {
        if (err) {
            console.log('Unable to fetch todos', err);
        } else {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }
    });
    // client.close();
});