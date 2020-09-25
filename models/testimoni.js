const mongoose = require('mongoose');

const testimoniSchema = mongoose.Schema({
  nama: {type: String},
  email: {type: String},
  pekerjaan: {type: String},
  paket: {type: String},
  foto: {type: String},
  kesan: {type: String},
});

const Testimoni = mongoose.model('Testimoni', testimoniSchema);

module.exports = {Testimoni};
