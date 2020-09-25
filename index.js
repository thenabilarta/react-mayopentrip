const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/key');

const mongoose = require('mongoose');
const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to mongoDB server'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/pesan', require('./routes/pesan'));
app.use('/api/testimoni', require('./routes/testimoni'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
