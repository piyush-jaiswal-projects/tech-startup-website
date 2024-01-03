const express = require('express');
const bodyParser = require('body-parser');
// Cross-Origin resource sharing
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const port = process.env.PORT || 5001;

async function connectDb() {
    const username = "piyushKeeperApp";
    const password = "pj7210479283";
    const dburl = "mongodb+srv://pjadmin2154:Le32Jxpab0z2pC0g@cluster0.dwjvq.mongodb.net/"

    mongoose.connect(dburl,
        { useNewUrlParser: true, useUnifiedTopology: true }, err => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Database Connected')
            }
        });
}


app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

const api = require('./routes/routes');
app.use('/', api);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'ooops! This route does not exist'
    });
});

app.listen(port, () => {
    connectDb()
    console.log(`BACK_END_SERVICE_PORT: ${port}`);
}
);

module.exports = connectDb