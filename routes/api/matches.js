const express = require("express");
const router = express.Router();
var nameSchema = new mongoose.Schema({
    Alert: String
  });
  
var matches = mongoose.model('matches',{} , 'things'); 

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = matches;
