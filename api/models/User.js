const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  full_name: {
    type: String
  },
  user_name: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('user', User);