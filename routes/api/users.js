const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator')
const User = require('../../model/User');
// post to api/users
// Register user

router.post('/',[
 check('name','Name is required').not().isEmpty(),
 check('email','please put a valide email').isEmail(),
 check('password','please inter password with 6 or more').isLength({min:6})
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const {name,email, password,isAdmin} = req.body;
    try{
        // see if the user exists 
        let user = await User.findOne({email});
        if(user){
          return  res.status(400).json({errors:[{msg:'User alredy exist'}]});
        }
        // get the users gravater


        user = new User({
            name,
            email,
            isAdmin,
            password
        });
        // encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
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