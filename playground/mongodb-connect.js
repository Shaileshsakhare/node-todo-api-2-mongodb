const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://controllo.local:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to the database', err);
    }
    // const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({ text: 'Something to do', connected: false }, (err, results) => {
    //     if (err) {
    //         return console.log(`Unable to add to the Todos ${err}`);
    //     }
    //     console.log(JSON.stringify(results, undefined, 2));
    // });

    const db = client.db('TodoApp');

    db.collection('Users').insertOne({ 'name': 'nn S. Sakhare', 'age': 28, 'location': 'Beed' }, (err, results) => {
        if (err) {
            return console.log(`Unable to add to the Users ${err}`);
        }
        console.log(JSON.stringify(results.ops, undefined, 2));
    })
    client.close();
});