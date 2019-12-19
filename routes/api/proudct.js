const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator')
const Prouduct = require('../../model/Prouduct');
router.get('/',(req,res)=>{
    Prouduct.find({}).then(allProduct => {
        res.json(allProduct) 
    });
})
// post to api/prouduct

router.post('/',[
 check('department','department is required').not().isEmpty(),
 check('title','title is reqierd').not().isEmpty(),
 check('link_img','put the link of the imge'),
 check('price','put the price').not().isEmpty(),

],async (req,res)=>{
    const errors = validationResult(req);
    console.log(errors)
    console.log(req.body)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const {department,title,link_img,price,info} = req.body;
    try{
        


        prouduct = new Prouduct({
            department,
            title,
            link_img,
            price,
            info
        });
    
        await prouduct.save();
        res.send("done");
        
    }catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server erorr')
    }
    
    
    
});
//route api/prouduct/:id
router.get('/:id',async (req,res)=>{
    const p = await Prouduct.findById(req.params.id)
    // if(!p)
    // res.status(404).json({msg:"sss"})
    res.json(p);
})


module.exports = router;