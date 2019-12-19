const express = require('express');
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const auth = require('../../middelware/auth')
const User = require('../../model/User');


router.get('/',auth, async (req,res)=>{
    try
    {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// post to api/auth
// Authenticate user & get token

router.post('/',[
    check('email','please put a valide email').isEmail(),
    check('password','password is required').exists()
   ],async (req,res)=>{
       const errors = validationResult(req);
       if(!errors.isEmpty())
       {
           return res.status(400).json({errors:errors.array()})
       }
       const {email, password} = req.body;
       try{
           // see if the user exists 
           let user = await User.findOne({email});
           if(!user){
             return  res
             .status(400)
             .json({errors:[{msg:'Invalide Credentials'}]});
           }
           const isMAtch = await bcrypt.compare(password,user.password)
           if(!isMAtch)
           {
            return  res
            .status(400)
            .json({errors:[{msg:'Invalide Credentials'}]});
           }
           
           // return jsonwebtoken
           const payload ={
               user:{
                 id:user.id,
                 name:user.name,
                 email:user.email
               }
           }
           jwt.sign(
               payload,
               config.get('jwtSecret'),
               {expiresIn:360000},(err,token)=>{
                   if(err) throw err;
                   res.json({token});
               });
       }catch(err)
       {
           console.error(err.message);
           res.status(500).send('Server erorr')
       }
       
       
       
   });
   
module.exports = router; 