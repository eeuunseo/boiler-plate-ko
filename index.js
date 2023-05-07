const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://eeuunseo:eeuunseo@cluster0.4etsddk.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB Connected...'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Example app!'));
