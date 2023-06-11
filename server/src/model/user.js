const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  
  password:  {type: String}, 
  phoneNumber: {type: String}, 
  status: {type: String, default: 'pending'},
  role: {type: String},
fullName: {type: String}

  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User