const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({});
const matches = mongoose.model('matches', dataSchema, 'things');

module.exports = matches;