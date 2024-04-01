const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect('mongodb+srv://ariakash01:ARIakash067@cluster0.ljlxnio.mongodb.net/',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host} `)
    })
}

module.exports = connectDatabase;