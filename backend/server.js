const express = require('express'); // note: dont change this to es6 module format
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const weeksRouter = require('./routes/weeks');
//const usersRouter = require('./routes/users');

app.use('/weeks', weeksRouter);
//app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});