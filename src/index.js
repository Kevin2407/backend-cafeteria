// var express = require('express');
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import productosRoute from './routes/productos.routes';
// settings
// creo una instancia de express
const app = express();

// const port = 4000;
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), ()=> {
    console.log(path.join(__dirname, '../public/'));
    console.log("estoy en el puerto " + app.get('port'));
})

// Middlewares (importante hacerlos antes de las rutas, sino no funciona)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// agrego la carpeta public como estatica
app.use(express.static(path.join(__dirname, '../public/')));


// crear una ruta

app.use('/api/cafeteria',productosRoute);