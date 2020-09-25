const mongoose = require('mongoose');

const pesanSchema = mongoose.Schema({
  nama: {type: String},
  email: {type: String},
  pesan: {type: String},
});

const Pesan = mongoose.model('Pesan', pesanSchema);

module.exports = {Pesan};
