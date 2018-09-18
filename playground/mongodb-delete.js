const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://controllo.local:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to the database', err);
    }
    console.log('Connected to the MongoDb Database');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Shailesh' }).then((results) => {
    //     console.log(results);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Jane' }).then((results) => {
    //     console.log(results);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ connected: false }).then((results) => {
    //     console.log(results);
    // });

    //deleteMany
    db.collection('Users').deleteMany({ name: 'Sakhare' }).then((results) => {
        console.log(results);
    });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b9e60a7d786552c5b326a44') }).then((results) => {
    //     console.log(results);
    // });

    // client.close();
});