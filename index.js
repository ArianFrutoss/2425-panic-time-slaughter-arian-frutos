const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const router = require("./src/routes/routes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(router);

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log('Conection with mongo correct.')
    } catch (error) {
        console.log(`Error conecting with mongo: ${error.message}`);
    }
}

start();