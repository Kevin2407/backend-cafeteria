import mongoose from 'mongoose';

// const url = 'mongodb://127.0.0.1:27017/cafeteria';
const url = 'mongodb+srv://kevmartin:Karenymaira2407@cafeteriabd.majclem.mongodb.net/cafeteria';


mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});

// guardar conexion en una variable

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', ()=>{
    console.log('BD conectada');
})