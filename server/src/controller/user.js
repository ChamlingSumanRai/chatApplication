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
  try{
    const data = await User.findOne({phoneNumber: req.body.phoneNumber})
 // step 2: check if the password is matched or not
 
    //  step 3: generate the token for the user
   if(data){
    const isMatched= await bcrypt.compare(req.body.password, data.password)
    if(isMatched){
      const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
    console.log(token)
    res.json({
    isLoggedIn: true,
    phoneNumber: data.phoneNumber,
    msg:  "Login Successfully",
    id: data._id,
    token: token,
    role: data.role
    })
    }else{
      res.json({
        isLoggedIn: false,
        msg: "invalid Password"
      })
    }
    }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  }
  }catch(err){
    console.log(err)
  }
  } 
  

  


  //console.log(req.body)
   // step 1: check if the phoneNumber/username/email exist or not
  
   // const hashPassword= await req.body.password
  // bcrypt.hashPassword(req.body.password =hashPassword);

 
 



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