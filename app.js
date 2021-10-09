const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const routes = require('./Routes/index');

const app = express();


const host = 'localhost';
const port = 2019;
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/', routes);

mongoose.connect('mongodb+srv://user131:root@cluster0.lyrbn.mongodb.net/zomato?retryWrites=true&w=majority')
    .then(res => {
        app.listen(port, host, () => {
            console.log(`server is runninig at ${host} ${port}`);


        });
    })
    .catch(err => console.log(err));

