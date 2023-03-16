const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const mongoose = require('mongoose')


app.use(morgan);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express)
