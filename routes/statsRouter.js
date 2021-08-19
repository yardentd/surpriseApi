
const express = require('express');
const  Stats  = require("../services/Stats");
const router = express.Router();

router.get('/', (req, res) => {
      const stats = Stats.getInstance();
      console.log(stats);
      res.send(stats);

  
  });

module.exports = router;
