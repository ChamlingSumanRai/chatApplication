const User = require('../model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerNewUser=  async (req,res)=>{
  //encryption of password in hascode
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password= hashPassword 
    console.log(hashPassword)
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

 
 const loginUser=  async (req,res)=>{
  //console.log(req.body)
   // step 1: check if the phoneNumber/username/email exist or not
  
   // const hashPassword= await req.body.password
  // bcrypt.hashPassword(req.body.password =hashPassword);

 
 const data = await User.findOne({phoneNumber: req.body.phoneNumber})
 // step 2: check if the password is matched or not
 const isMatched= await bcrypt.compare(req.body.password, data.password)
    //  step 3: generate the token for the user
   if(data&& isMatched){
    const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
    console.log(token)
    res.json({
    isLoggedIn: true,
    msg:  "Login Successfully",
    id: data._id,
    token: token
    })
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  }

}


const getAllUser =  async (req,res)=>{
   const data = await User.find()
   if(data){
     res.json({
     userList: data
     })
   }
 }

 const getUserDetailsById = async (req,res)=>{
   const data = await User.findById(req.params.id)
   if(data){
     res.json({
     userList: data
     })
   }
 }
 
  module.exports = {registerNewUser,loginUser,getAllUser,getUserDetailsById}