const express = require("express");
const User = require("../../models/user");
const router = new express.Router();

//Create new user
router.post("/api/user", async (req, res)=>{
    
    try {
        
        const emailExists  = await User.findOne({email: req.body.email});
        
        if(emailExists ){
             return res.status(400).json({ error: 'Email already used' });
        }
        const user = new User(req.body)
        await user.save()
        res.status(201).json({user});
    }
    catch (err){
        res.status(401).send(err);
    }

});

module.exports = router;