
const {onRequest} = require("firebase-functions/v2/https");



const functions = require('"firebase-functions');
const express = require("express");
const cors = require ('cors');
const stripe = require('stripe')('sk_test_51NWYMNIc8VxG7WArL4j9d2bUhwSqkLSs26anTBpgTuSj11Z2b705kcHxz41w01H2lpVj4f80XsnBga2OT4PxTdfY00rSOGrWh5')
//api

//App config
const app =express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());


//-api routes
app.get('/',(request, response)=>response.status(200).send('Hellow World'))

//-listen command
exports.api = functions.onRequest(app)



