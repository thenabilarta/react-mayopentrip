const express = require('express');
const router = express.Router();
const {Pesan} = require('../models/pesan');

router.post('/savepesan', async (req, res) => {
  const pesan = new Pesan(req.body);

  const newPesan = await pesan.save();
  if (newPesan) {
    res.send('berhasil gan');
  } else {
    res.status(401).send({message: 'Invalid User Data.'});
  }
});

module.exports = router;
