const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./UserRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//use personal Connection String here, which is from cloud.mongodb.com, personal account.
mongoose.connect('mongodb+srv://comp3123MongoDBUser:gbc101217272@comp3123.2ui08.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });