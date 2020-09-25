const express = require('express');
const router = express.Router();
const {Testimoni} = require('../models/testimoni');

router.post('/savetestimoni', async (req, res) => {
  const testimoni = new Testimoni(req.body);

  const newTestimoni = await testimoni.save();
  if (newTestimoni) {
    res.send('berhasil gan');
  } else {
    res.status(401).send({message: 'Invalid User Data.'});
  }
});

module.exports = router;
